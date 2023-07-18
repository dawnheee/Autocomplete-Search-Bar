import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import WordBox from "../WordBox";
import { useDebounce } from "../../hooks/useDebounce";
import searchService from "../../service/serchAPI";

function Search() {
  const [letters, setLetters] = useState("");
  const debouncedLetters = useDebounce(letters);

  useEffect(() => {
    console.log(debouncedLetters);
    if (debouncedLetters !== "") {
      searchService(debouncedLetters);
    }
  }, [debouncedLetters]);

  return (
    <div>
      Search 컴포넌트
      <SearchBar setLetters={setLetters} />
      <SearchButton />
      <WordBox />
    </div>
  );
}

export default Search;
