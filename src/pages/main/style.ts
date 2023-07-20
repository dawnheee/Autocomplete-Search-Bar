import { Color } from "./../../constant/style/colors";
import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;

  overflow: hidden;
  background: linear-gradient(
    ${Color.lightBlue} 60%,
    ${Color.highrightGray} 40%,
    ${Color.white} 100%
  );
`;

export const SearchSection = styled.section`
  padding-top: 100px;
  height: auto;
  width: auto;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;
