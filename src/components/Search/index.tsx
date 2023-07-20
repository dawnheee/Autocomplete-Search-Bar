import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import WordBox from "../WordBox";
import { useDebounce } from "../../hooks/useDebounce";
import searchService from "../../service/api/serchAPI";
import { Sick } from "../../@type/types";
import * as s from "./style";
import SearchingLetters from "../SearchingLetters";
import { Color } from "../../constant/style/colors";
function Search() {
  const [letters, setLetters] = useState("");
  const debouncedLetters = useDebounce(letters);
  const [autoCompleteArr, setAutoCompleteArr] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [recentArr, setRecentArr] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

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
    if (letters !== "") {
      setRecentArr((prevRecentArr) => [letters, ...prevRecentArr]);
      setIsShowing(false);
    }
  };

  const choiceItemHandler = (name: string) => {
    setLetters(name);
    setRecentArr((prevRecentArr) => [name, ...prevRecentArr]);
    setIsShowing(false);
    setIsFocused(false);
  };

  return (
    <s.Layout
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}>
      <s.BarButtonSection border={isShowing ? `${Color.pointBlue}` : "none"}>
        <SearchBar
          letters={letters}
          setLetters={setLetters}
          setIsShowing={setIsShowing}
        />
        <SearchButton onClick={searchButtonHandler} />
      </s.BarButtonSection>
      {isShowing ? (
        <s.LetterWordSection>
          {letters && <SearchingLetters letters={letters} />}

          {letters !== "" ? (
            <WordBox
              isLoading={isLoading}
              sickArr={autoCompleteArr}
              type="auto"
              choiceItemHandler={choiceItemHandler}
              setIsFocused={setIsFocused}
              isFocused={isFocused}
            />
          ) : (
            <WordBox
              isLoading={isLoading}
              sickArr={recentArr}
              type="recent"
              choiceItemHandler={choiceItemHandler}
              setIsFocused={setIsFocused}
              isFocused={isFocused}
            />
          )}
        </s.LetterWordSection>
      ) : null}
    </s.Layout>
  );
}

export default Search;
