import React, { useRef, useEffect, useState } from "react";
import AutoCompletedItem from "../AutoCompletedItem";
import * as s from "./style";
import useKey from "../../hooks/useKey";

interface WordBoxProps {
  sickArr: string[];
  type: string;
  choiceItemHandler: (name: string) => void;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}
function WordBox({
  sickArr,
  type,
  choiceItemHandler,
  isFocused,
  setIsFocused,
}: WordBoxProps) {
  const [isMovingMouse, setIsMovingMouse] = useState(true);
  const wordBoxRef = useRef<HTMLDivElement>(null);

  const { focusIndex, setFocusIndex, keyboardNavigation } = useKey(
    sickArr,
    isFocused,
    setIsFocused,
    choiceItemHandler
  );

  const mousedown = (index: number) => {
    setIsMovingMouse(true);
    setFocusIndex(index);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardNavigation);
    return () => {
      window.removeEventListener("keydown", keyboardNavigation);
    };
  }, [keyboardNavigation]);
  console.log(focusIndex);
  console.log(isMovingMouse);

  return (
    <div ref={wordBoxRef}>
      <h3> {type === "auto" ? "추천검색어" : "최근검색어"}</h3>
      <s.Items>
        {sickArr.length !== 0 ? (
          <s.Items>
            {sickArr.map((sick, index) => (
              <AutoCompletedItem
                key={index}
                index={index}
                mousedown={mousedown}
                name={sick}
                choiceItemHandler={choiceItemHandler}
                setFocusIndex={setFocusIndex}
                isFocused={focusIndex === index}
              />
            ))}
          </s.Items>
        ) : (
          <div>검색어 없음</div>
        )}
      </s.Items>
    </div>
  );
}

export default React.memo(WordBox);
