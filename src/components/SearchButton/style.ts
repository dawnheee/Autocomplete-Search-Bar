import styled from "@emotion/styled";
import { Color } from "../../constant/style/colors";
export const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  position: relative;
  right: 0.1rem;
  background-color: ${Color.pointBlue};
  color: ${Color.white};
  width: 3rem;
  height: 3rem;

  :hover {
    background-color: ${Color.lightBlue};
  }
`;
