import React from "react";
import { Sick } from "../../@type/types";
import AutoCompletedItem from "../AutoCompletedItem";
import * as s from "./style";

function WordBox({ sickArr }: { sickArr: Sick[] }) {
  console.log(sickArr);

  return (
    <div>
      <h3>추천검색어</h3>
      <s.Items>
        {sickArr.map((sick, index) => (
          <AutoCompletedItem key={index} name={sick.sickNm} />
        ))}
      </s.Items>
    </div>
  );
}

export default React.memo(WordBox);
