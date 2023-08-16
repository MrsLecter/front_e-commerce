import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  topGap?: number;
  preventScroll: boolean;
  hideScrollBar?: boolean;
}

const MainWrapper: FC<Props> = ({
  children,
  topGap = 0,
  preventScroll,
  hideScrollBar = false,
}) => {
  return (
    <StyledMainWrapper
      topGap={topGap}
      preventScroll={preventScroll}
      hideScrollBar={hideScrollBar}
    >
      {children}
    </StyledMainWrapper>
  );
};

const StyledMainWrapper = styled.div<{
  topGap: number;
  preventScroll: boolean;
  hideScrollBar: boolean;
}>`
  padding-top: ${(props) => props.topGap + "px"};
  /* height:auto; */
  /* min-height: 100%; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: auto;
  background-color: #f0f1f1;
  scrollbar-gutter: ${(props) => (props.hideScrollBar ? "auto" : "stable")};

  ${(props) =>
    props.preventScroll &&
    css`
      max-height: 100%;
      overflow: hidden;
    `}

  @media (max-width: 350px) {
    padding-top: ${(props) => +props.topGap * 2 + 16 + "px"};
  }
`;

export default MainWrapper;
