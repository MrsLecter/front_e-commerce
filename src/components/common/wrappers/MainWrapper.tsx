import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  topGap?: number;
}

const MainWrapper: FC<Props> = ({ children, topGap = 0 }) => {
  return <StyledMainWrapper topGap={topGap}>{children}</StyledMainWrapper>;
};

const StyledMainWrapper = styled.div<{ topGap: number }>`
  padding-top: ${(props) => props.topGap + "px"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: auto;
  background-color: #f0f1f1;

  @media (max-width: 350px) {
    padding-top: ${(props) => +props.topGap * 2 + 16 + "px"};
  }
`;

export default MainWrapper;
