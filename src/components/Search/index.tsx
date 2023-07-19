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
  const [autoCompleteArr, setAutoCompleteArr] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [recentArr, setRecentArr] = useState<string[]>([]);

  const fetchData = async (debouncedLetters: string) => {
    try {
      setIsLoading(true);
      const arr = await searchService(debouncedLetters);
      const sickArray: Sick[] = Array.isArray(arr) ? arr : JSON.parse(arr);
      const sickNmArray: string[] = sickArray
        .slice(0, 10)
        .map((item) => item.sickNm);
      setAutoCompleteArr(sickNmArray);
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

  const searchButtonHandler = () => {
    setRecentArr((prevRecentArr) => [letters, ...prevRecentArr]);
    setIsSearching(false);
  };

  const choiceItemHandler = (name: string) => {
    setLetters(name);
    setRecentArr((prevRecentArr) => [name, ...prevRecentArr]);
    setIsSearching(false);
  };

  return (
    <div>
      <s.Section>
        <SearchBar
          letters={letters}
          setLetters={setLetters}
          setIsSearching={setIsSearching}
        />
        <SearchButton onClick={searchButtonHandler} />
      </s.Section>
      {isSearching && (
        <SearchingLetters letters={letters} isLoading={isLoading} />
      )}

      {isSearching ? (
        letters !== "" ? (
          <WordBox
            sickArr={autoCompleteArr}
            type="auto"
            choiceItemHandler={choiceItemHandler}
          />
        ) : (
          <WordBox
            sickArr={recentArr}
            type="recent"
            choiceItemHandler={choiceItemHandler}
          />
        )
      ) : null}
    </div>
  );
}

export default Search;
