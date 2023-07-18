import React from "react";
import { Sick } from "../../@type/types";

interface WordBoxProps {
  sickArr: Sick[];
}

function WordBox({ sickArr }: WordBoxProps) {
  console.log(sickArr);
  return <div>WordBox</div>;
}

export default React.memo(WordBox);
