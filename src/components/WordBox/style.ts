import styled from "@emotion/styled";
import { lightgray, white, darkgray } from "../../constant/style/colors";
import { FontSize, BoxColumnMargin } from "../../constant/style/size";

export const WordBox = styled.div`
  background-color: ${white};
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: ${FontSize.explain};
  color: ${darkgray};
  margin-bottom: ${BoxColumnMargin};
  font-weight: 500;
  padding: 0px 20px 0px 20px;
`;

export const Message = styled.span`
  color: ${lightgray};
  padding: 0px 20px 0px 20px;
`;
