import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import WordBox from "../WordBox";
import { useDebounce } from "../../hooks/useDebounce";
function Search() {
  // searchBar에서 debouncedLetters 가져옴
  // 여기서 config 객체를 만들까?
  const [letters, setLetters] = useState("");
  const debouncedLetters = useDebounce(letters);

  useEffect(() => {
    console.log(debouncedLetters);
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
