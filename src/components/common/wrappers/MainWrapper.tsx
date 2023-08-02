import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  marginTop?: number;
}

const MainWrapper: FC<Props> = ({ children, marginTop = 0 }) => {
  return (
    <StyledMainWrapper marginTop={marginTop}>{children}</StyledMainWrapper>
  );
};

const StyledMainWrapper = styled.div<{ marginTop: number }>`
  margin-top: ${(props) => props.marginTop + "px"};
  min-height: 100%;
  background-color: #f0f1f1;
`;

export default MainWrapper;
