import React from "react";
import AutoCompletedItem from "../AutoCompletedItem";
import * as s from "./style";

interface WordBoxProps {
  sickArr: string[];
  type: string;
  choiceItemHandler: (name: string) => void;
}
function WordBox({ sickArr, type, choiceItemHandler }: WordBoxProps) {
  return (
    <div>
      <h3> {type === "auto" ? "추천검색어" : "최근검색어"}</h3>
      <s.Items>
        {sickArr.length !== 0 ? (
          <div>
            {sickArr.map((sick, index) => (
              <AutoCompletedItem
                key={index}
                name={sick}
                choiceItemHandler={choiceItemHandler}
              />
            ))}
          </div>
        ) : (
          <div>검색어 없음</div>
        )}
      </s.Items>
    </div>
  );
}

export default React.memo(WordBox);
