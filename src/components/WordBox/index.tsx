import React from "react";
import { Sick } from "../../@type/types";

interface WordBoxProps {
  sickArr: Sick[];
  isLoading: boolean;
}

function WordBox({ sickArr, isLoading }: WordBoxProps) {
  console.log(sickArr);

  return (
    <div>
      <h3>WordBox</h3>

      {!isLoading ? <div>추천 검색어</div> : <div>Loading...</div>}
    </div>
  );
}

export default React.memo(WordBox);
