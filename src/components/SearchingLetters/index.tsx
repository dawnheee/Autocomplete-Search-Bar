import React from "react";
import { IconSize } from "../../constant/style/size";
import SearchIcon from "../../asset/icon/SearchIcon";
import { gray } from "../../constant/style/colors";
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
      <SearchIcon size={IconSize} color={gray} />
      {!isLoading ? <div>{letters}</div> : <span>검색중...</span>}
    </s.Section>
  );
}

export default React.memo(SearchingLetters);
