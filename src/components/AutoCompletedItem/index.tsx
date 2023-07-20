import React from "react";
import SearchIcon from "../../asset/icon/SearchIcon";
import { IconSize } from "../../constant/style/size";
import { Color } from "../../constant/style/colors";
import * as s from "./style";

interface AutoCompletedItemProps {
  word: string;
  choiceItemHandler: (name: string) => void;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
  isFocused: boolean;
  mousedown: (index: number) => void;
  index: number;
}

function AutoCompletedItem({
  index,
  word,
  choiceItemHandler,
  isFocused,
  mousedown,
}: AutoCompletedItemProps) {
  const getSubString = (word: string) => {
    if (word.length > 31) {
      return `${word.substring(0, 32)}...`;
    }
    return word;
  };

  const substring = getSubString(word);

  return (
    <s.Button
      isFocused={isFocused}
      onClick={() => choiceItemHandler(word)}
      onMouseMove={() => mousedown(index)}>
      <SearchIcon size={IconSize} color={Color.darkGray} />
      <s.Text>{substring}</s.Text>
    </s.Button>
  );
}

export default AutoCompletedItem;
