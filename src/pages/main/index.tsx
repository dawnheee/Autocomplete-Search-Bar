import React from "react";
import Search from "../../components/Search";
import * as s from "./style";

function Main() {
  return (
    <s.Background>
      <s.SearchSection>
        <s.Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </s.Title>
        <Search />
      </s.SearchSection>
    </s.Background>
  );
}

export default Main;
