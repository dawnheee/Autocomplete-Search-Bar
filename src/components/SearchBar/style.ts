import styled from "@emotion/styled";
import { darkgray } from "../../constant/style/colors";

interface DeleteButtonProps {
  visibile: boolean;
}

export const InputContainer = styled.section``;

export const Input = styled.input`
  width: 29rem;
  height: 65px;
  flex: 1;
  border: none;
  border-radius: 50px;
  outline: none;
  margin-right: -10px;
`;

export const DeleteButton = styled.button<DeleteButtonProps>`
  background: transparent;
  border: none;
  border-radius: 50%;
  color: ${darkgray};
  cursor: pointer;
  outline: none;
  position: relative;

  right: 12px;
  visibility: ${(props) => (props.visibile ? "visible" : "hidden")};
`;
