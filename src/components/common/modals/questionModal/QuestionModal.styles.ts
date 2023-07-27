import styled from "styled-components";

export const StyledQuestionModal = styled.div`
  width: 464px;
  height: 368px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;
  border-radius: 2px;

  @media (max-width: 700px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;
