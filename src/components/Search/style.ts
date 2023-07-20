import styled from "@emotion/styled";
import { lightgray, white } from "../../constant/style/colors";
import { CSSProperties } from "react";

interface BarButtonSectionProps {
  border: CSSProperties["border"];
}

export const Layout = styled.section``;

export const BarButtonSection = styled.section<BarButtonSectionProps>`
  display: flex;
  background-color: ${white};
  border-radius: 50px;
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid ${(props) => props.border};
`;

export const LetterWordSection = styled.section`
  background-color: ${white};
  border-radius: 20px;
  margin-top: 10px;
  padding: 30px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 2px ${lightgray};
`;
