import React from "react";
import { IconSize } from "../../constant/style/size";
import SearchIcon from "../../asset/icon/SearchIcon";
import { darkgray } from "../../constant/style/colors";
import * as s from "./style";
function SearchingLetters({
  letters,
  isLoading,
}: {
  letters: string;
  isLoading: boolean;
}) {
  return (
    <s.Section>
      <SearchIcon size={IconSize} color={darkgray} />
      <s.Text>
        {!isLoading ? <span>{letters}</span> : <span>검색중...</span>}
      </s.Text>
    </s.Section>
  );
}

export default React.memo(SearchingLetters);
