import styled from "@emotion/styled";
import { Color } from "../../constant/style/colors";
import { FontSize, BoxColumnMargin } from "../../constant/style/size";

export const WordBox = styled.div`
  background-color: ${Color.white};
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: ${FontSize.explain};
  color: ${Color.darkGray};
  margin-bottom: ${BoxColumnMargin};
  font-weight: 500;
  padding: 0px 20px 0px 20px;
`;

export const Message = styled.span`
  color: ${Color.lightGray};
  padding: 0px 20px 0px 20px;
`;
