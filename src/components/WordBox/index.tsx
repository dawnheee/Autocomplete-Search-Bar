import React, { useRef, useEffect } from "react";
import AutoCompletedItem from "../AutoCompletedItem";
import * as s from "./style";
import useKey from "../../hooks/useKey";

interface WordBoxProps {
  wordArr: string[];
  type: string;
  choiceItemHandler: (name: string) => void;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  inputLetters: string;
}
function WordBox({
  wordArr,
  type,
  choiceItemHandler,
  isFocused,
  setIsFocused,
  isLoading,
  inputLetters,
}: WordBoxProps) {
  const wordBoxRef = useRef<HTMLDivElement>(null);

  const { focusIndex, setFocusIndex, keyboardNavigation } = useKey(
    wordArr,
    isFocused,
    setIsFocused,
    choiceItemHandler
  );

  const mousedown = (index: number) => {
    setFocusIndex(index);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardNavigation);
    return () => {
      window.removeEventListener("keydown", keyboardNavigation);
    };
  }, [keyboardNavigation]);

  return (
    <s.WordBox ref={wordBoxRef}>
      <s.Text>
        {type === "auto" && "추천 검색어"}
        {type === "recent" && "최근 검색어"}
      </s.Text>

      {!isLoading ? (
        <s.Items>
          {wordArr.length !== 0 ? (
            <s.Items>
              {wordArr.map((word, index) => (
                <AutoCompletedItem
                  key={index}
                  index={index}
                  mousedown={mousedown}
                  word={word}
                  choiceItemHandler={choiceItemHandler}
                  setFocusIndex={setFocusIndex}
                  isFocused={focusIndex === index}
                />
              ))}
            </s.Items>
          ) : (
            <s.Message>
              {type === "auto" && "추천 검색어"}
              {type === "recent" && "최근 검색어"}가 없습니다
            </s.Message>
          )}
        </s.Items>
      ) : (
        <div>{inputLetters.length > 1 && <s.Message>검색중</s.Message>}</div>
      )}
    </s.WordBox>
  );
}

export default React.memo(WordBox);
