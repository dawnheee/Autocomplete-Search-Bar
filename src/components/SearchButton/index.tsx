import React from "react";
import * as s from "./style";
import SearchIcon from "../../asset/icon/SearchIcon";
import { pointBlue } from "../../constant/style/colors";
import { largerIconSize } from "../../constant/style/size";

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <s.Button onClick={onClick}>
      <SearchIcon size={largerIconSize} color={pointBlue} />
    </s.Button>
  );
}

export default SearchButton;
