import styled from "@emotion/styled";

interface ButtonProps {
  isFocused: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  ${(props) =>
    props.isFocused &&
    `background-color: yellow;
  `}
`;
