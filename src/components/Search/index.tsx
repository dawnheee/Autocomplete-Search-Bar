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
  const [inputLetters, setInputLetters] = useState("");
  const debouncedLetters = useDebounce(inputLetters);
  const [autoCompleteWordArr, setAutoCompleteWordArr] = useState<string[]>([]);
  const [recentArr, setRecentArr] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const fetchData = async (debouncedLetters: string) => {
    try {
      const arr = await searchService(debouncedLetters);
      const sickArray: Sick[] = Array.isArray(arr) ? arr : JSON.parse(arr);
      const sickNmArray: string[] = sickArray
        .slice(0, 10)
        .map((item) => item.sickNm);
      setAutoCompleteWordArr(sickNmArray);
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
    if (inputLetters !== "") {
      setRecentArr((prev) => [inputLetters, ...prev]);
      setIsShowing(false);
    }
  };

  const choiceItemHandler = (name: string) => {
    setInputLetters(name);
    setRecentArr((prev) => [name, ...prev]);
    setIsShowing(false);
    setIsFocused(false);
  };

  return (
    <section onFocus={() => setIsFocused(true)}>
      <s.BarButtonSection border={isShowing ? `${Color.pointBlue}` : "none"}>
        <SearchBar
          inputLetters={inputLetters}
          setInputLetters={setInputLetters}
          setIsShowing={setIsShowing}
          setIsLoading={setIsLoading}
        />
        <SearchButton onClick={searchButtonHandler} />
      </s.BarButtonSection>
      {isShowing ? (
        <s.LetterWordSection>
          {inputLetters && <SearchingLetters inputLetters={inputLetters} />}
          {inputLetters !== "" ? (
            <WordBox
              isLoading={isLoading}
              wordArr={autoCompleteWordArr}
              type="auto"
              choiceItemHandler={choiceItemHandler}
              setIsFocused={setIsFocused}
              isFocused={isFocused}
            />
          ) : (
            <WordBox
              isLoading={isLoading}
              wordArr={recentArr}
              type="recent"
              choiceItemHandler={choiceItemHandler}
              setIsFocused={setIsFocused}
              isFocused={isFocused}
            />
          )}
        </s.LetterWordSection>
      ) : null}
    </section>
  );
}

export default Search;
