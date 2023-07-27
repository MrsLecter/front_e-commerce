import styled from "styled-components";

export const StyledRimOrder = styled.div`
  margin: 16px auto;
  width: 994px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    max-width: calc(100% - 16px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > div {
      width: 535px;
    }
  }

  @media (max-width: 560px) {
    & > div {
      width: 100%;
    }
  }
`;

export const QuestionWrapper = styled.div`
  width: 411px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  background-color: #fffefe;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;
