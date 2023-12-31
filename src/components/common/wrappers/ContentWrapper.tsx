import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper: FC<Props> = ({ children }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

const StyledContentWrapper = styled.div`
  margin: 0px auto 16px;
  padding: 16px 16px;
  width: calc(100% - 16px);
  /* height: 100%; */
  min-width: 230px;
  max-width: 994px;
  min-height: auto;
  background-color: #fefeff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 4px;

  & > div:first-child {
    margin-top: 0px;
  }
`;

export default ContentWrapper;
