import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import WordBox from "../WordBox";
import { useDebounce } from "../../hooks/useDebounce";
import searchService from "../../service/api/serchAPI";
import { Sick } from "../../@type/types";
import * as s from "./style";
import SearchingLetters from "../SearchingLetters";

function Search() {
  const [letters, setLetters] = useState("");
  const debouncedLetters = useDebounce(letters);
  const [sickArr, setSickArr] = useState<Sick[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (debouncedLetters: string) => {
    try {
      setIsLoading(true);
      const arr = await searchService(debouncedLetters);
      const sickArray = Array.isArray(arr) ? arr : JSON.parse(arr);
      setSickArr(sickArray.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedLetters !== "") {
      fetchData(debouncedLetters);
    }
  }, [debouncedLetters]);

  return (
    <div>
      <s.Section>
        <SearchBar setLetters={setLetters} />
        <SearchButton />
      </s.Section>
      <SearchingLetters letters={letters} isLoading={isLoading} />
      <WordBox sickArr={sickArr} />
    </div>
  );
}

export default Search;
