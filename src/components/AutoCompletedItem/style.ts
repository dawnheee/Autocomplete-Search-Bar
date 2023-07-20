import styled from "@emotion/styled";
import { Color } from "../../constant/style/colors";
import { FontSize } from "../../constant/style/size";

interface ButtonProps {
  isFocused: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${Color.white};
  border: none;
  height: 2.5rem;
  padding: 0px 20px 0px 20px;

  ${(props) =>
    props.isFocused &&
    `background-color: ${Color.highrightGray};
  `}
`;

export const Text = styled.span`
  margin-left: 0.5rem;
  font-size: ${FontSize.sickName};
`;
