import styled from "styled-components";

export const QuestionWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
