import React from "react";
import SearchIcon from "../../asset/icon/SearchIcon";
import { IconSize } from "../../constant/style/size";
import { Color } from "../../constant/style/colors";
import * as s from "./style";

interface AutoCompletedItemProps {
  sick: string;
  choiceItemHandler: (name: string) => void;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
  isFocused: boolean;
  mousedown: (index: number) => void;
  index: number;
}

function AutoCompletedItem({
  index,
  sick,
  choiceItemHandler,
  isFocused,
  mousedown,
}: AutoCompletedItemProps) {
  const getSubString = (sick: string) => {
    if (sick.length > 31) {
      return `${sick.substring(0, 32)}...`;
    }
    return sick;
  };

  const substring = getSubString(sick);
  return (
    <s.Button
      isFocused={isFocused}
      onClick={() => choiceItemHandler(sick)}
      onMouseMove={() => mousedown(index)}>
      <SearchIcon size={IconSize} color={Color.darkGray} />
      <s.Text>{substring}</s.Text>
    </s.Button>
  );
}

export default AutoCompletedItem;
