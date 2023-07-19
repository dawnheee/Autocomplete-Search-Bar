import React from "react";
import SearchIcon from "../../asset/icon/SearchIcon";
import { IconSize } from "../../constant/style/size";
import { gray } from "../../constant/style/colors";
import * as s from "./style";

interface AutoCompletedItemProps {
  name: string;
  choiceItemHandler: (name: string) => void;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
  isFocused: boolean;
  mousedown: (index: number) => void;
  index: number;
}

function AutoCompletedItem({
  index,
  name,
  choiceItemHandler,
  isFocused,
  mousedown,
}: AutoCompletedItemProps) {
  return (
    <s.Button
      isFocused={isFocused}
      onClick={() => choiceItemHandler(name)}
      onMouseMove={() => mousedown(index)}>
      <SearchIcon size={IconSize} color={gray} /> {name}
    </s.Button>
  );
}

export default AutoCompletedItem;
