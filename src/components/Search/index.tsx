import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import WordBox from "../WordBox";
import { useDebounce } from "../../hooks/useDebounce";
import searchService from "../../service/api/serchAPI";
import { Sick } from "../../@type/types";

function Search() {
  const [letters, setLetters] = useState("");
  const debouncedLetters = useDebounce(letters);
  const [sickArr, setSickArr] = useState<Sick[]>([]);

  const fetchData = async (debouncedLetters: string) => {
    try {
      const arr = await searchService(debouncedLetters);
      const sickArray = Array.isArray(arr) ? arr : JSON.parse(arr);
      setSickArr(sickArray.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (debouncedLetters !== "") {
      fetchData(debouncedLetters);
    }
  }, [debouncedLetters]);

  return (
    <div>
      Search 컴포넌트
      <SearchBar setLetters={setLetters} />
      <SearchButton />
      <WordBox sickArr={sickArr} />
    </div>
  );
}

export default Search;
