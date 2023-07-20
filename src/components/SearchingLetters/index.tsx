import React from "react";
import { IconSize } from "../../constant/style/size";
import SearchIcon from "../../asset/icon/SearchIcon";
import { Color } from "../../constant/style/colors";
import * as s from "./style";
function SearchingLetters({ inputLetters }: { inputLetters: string }) {
  return (
    <s.Section>
      <SearchIcon size={IconSize} color={Color.darkGray} />
      <s.Text>{inputLetters}</s.Text>
    </s.Section>
  );
}

export default React.memo(SearchingLetters);
