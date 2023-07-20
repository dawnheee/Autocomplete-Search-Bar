import React from "react";
import { IconSize } from "../../constant/style/size";
import SearchIcon from "../../asset/icon/SearchIcon";
import { darkgray } from "../../constant/style/colors";
import * as s from "./style";
function SearchingLetters({ letters }: { letters: string }) {
  return (
    <s.Section>
      <SearchIcon size={IconSize} color={darkgray} />
      <s.Text>{letters}</s.Text>
    </s.Section>
  );
}

export default React.memo(SearchingLetters);
