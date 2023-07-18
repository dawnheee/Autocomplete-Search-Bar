import React from "react";
import * as s from "./style";
import SearchIcon from "../../asset/icon/SearchIcon";
import { pointBlue } from "../../constant/style/colors";
import { largerIconSize } from "../../constant/style/size";
function SearchButton() {
  return (
    <s.Button>
      <SearchIcon size={largerIconSize} color={pointBlue} />
    </s.Button>
  );
}

export default SearchButton;
