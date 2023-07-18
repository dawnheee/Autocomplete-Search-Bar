import React from "react";
import SearchIcon from "../../asset/icon/SearchIcon";
import { IconSize } from "../../constant/style/size";
import { gray } from "../../constant/style/colors";

function AutoCompletedItem({ name }: { name: string }) {
  return (
    <button>
      <SearchIcon size={IconSize} color={gray} /> {name}
    </button>
  );
}

export default AutoCompletedItem;
