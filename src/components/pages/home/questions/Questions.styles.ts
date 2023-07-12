import styled from "styled-components";

export const QuestionsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QuestionContent = styled.div`
  padding: 12px;
  width: calc(100% - 16px);
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: var(--font-roboto);
  text-align: start;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;

  div:first-child {
    width: 110px;
  }

  div:last-child {
    width: calc(100%-110px);
    padding-left: 20px;
  }

  p:first-child {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #425f80;
  }

  p:last-child {
    margin-top: 4px;
    font-size: 13px;
    color: #6a7785;
    letter-spacing: 0.5px;
  }

  button {
    margin: 5px;
  }

  @media (max-width: 760px) {
    display: flex;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;

    div {
      width: 100%;
    }

    div:last-child {
      padding-left: 0px;
    }

    p:first-child {
      margin-top: 12px;
    }
  }
`;
