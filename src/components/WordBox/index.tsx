import React, { useRef, useEffect } from "react";
import AutoCompletedItem from "../AutoCompletedItem";
import * as s from "./style";
import useKey from "../../hooks/useKey";

interface WordBoxProps {
  sickArr: string[];
  type: string;
  choiceItemHandler: (name: string) => void;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
function WordBox({
  sickArr,
  type,
  choiceItemHandler,
  isFocused,
  setIsFocused,
  isLoading,
}: WordBoxProps) {
  const wordBoxRef = useRef<HTMLDivElement>(null);

  const { focusIndex, setFocusIndex, keyboardNavigation } = useKey(
    sickArr,
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
      <s.Text> {type === "auto" ? "추천 검색어" : "최근 검색어"}</s.Text>

      {!isLoading ? (
        <>
          <s.Items>
            {sickArr.length !== 0 ? (
              <s.Items>
                {sickArr.map((sick, index) => (
                  <AutoCompletedItem
                    key={index}
                    index={index}
                    mousedown={mousedown}
                    sick={sick}
                    choiceItemHandler={choiceItemHandler}
                    setFocusIndex={setFocusIndex}
                    isFocused={focusIndex === index}
                  />
                ))}
              </s.Items>
            ) : (
              <s.Message>
                {type === "auto" ? "추천 검색어" : "최근 검색어"}가 없습니다
              </s.Message>
            )}
          </s.Items>
        </>
      ) : (
        <s.Message>검색중</s.Message>
      )}
    </s.WordBox>
  );
}

export default React.memo(WordBox);
