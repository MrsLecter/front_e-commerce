import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  top: number;
  children: ReactNode;
}

const SectionWrapper: FC<Props> = ({ top, children }) => {
  return (
    <StyledSection>
      <ContentWrapper top={top}>{children}</ContentWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div<{ top: number }>`
  margin: ${(props) => (props.top ? props.top + "px auto 0" : "0 auto")};
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default SectionWrapper;
