import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const MainWrapper: FC<Props> = ({ children }) => {
  return <StyledMainWrapper>{children}</StyledMainWrapper>;
};

const StyledMainWrapper = styled.div`
  /* height: auto; */
  min-height: 100%;
  background-color: #f0f1f1;
`;

export default MainWrapper;
