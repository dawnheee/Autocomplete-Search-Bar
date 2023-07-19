import React from "react";
import SearchIcon from "../../asset/icon/SearchIcon";
import { IconSize } from "../../constant/style/size";
import { gray } from "../../constant/style/colors";

interface AutoCompletedItemProps {
  name: string;
  choiceItemHandler: (name: string) => void;
}

function AutoCompletedItem({
  name,
  choiceItemHandler,
}: AutoCompletedItemProps) {
  return (
    <button onClick={() => choiceItemHandler(name)}>
      <SearchIcon size={IconSize} color={gray} /> {name}
    </button>
  );
}

export default AutoCompletedItem;
