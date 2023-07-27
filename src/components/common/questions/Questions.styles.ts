import styled, { css } from "styled-components";
export const QuestionsWrapper = styled.div`
  padding: 16px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #fffefe;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);

  @media (max-width: 1000px) {
    width: calc(100% - 16px);
  }

  @media (max-width: 560px) {
    height: 300px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const QuestionImage = styled.div<{ loading: boolean }>`
  width: 118px;
  height: 100%;

  ${(props) =>
    props.loading &&
    css`
      border-radius: 2px;
      background-color: hsl(200, 20%, 70%);
      animation: image-loading 1s linear infinite alternate;
    `}
`;

export const QuestionContent = styled.div`
  padding-left: 16px;
  width: calc(100% - 126px);
  height: 100%;
  font-family: var(--font-roboto);
  text-align: start;
  background-color: white;

  p {
    margin: 0 8px;
  }

  p:first-child {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.6px;
    color: #425f80;
  }

  p:nth-child(2) {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: #757575;
    letter-spacing: 0.5px;
  }

  button {
    margin: 8px 0 0;
  }

  @media (max-width: 560px) {
    padding-left: 0px;
    width: 100%;
  }
`;

export const LoadingQuiestion = styled.div`
  margin: 0;
  width: 80px;
  height: 21px;
  border-radius: 2px;
  background-color: hsl(200, 20%, 70%);
  animation: image-loading 1s linear infinite alternate;
`;

export const LoadingDescription = styled.div`
  margin: 4px 0px 4px;
  width: 100px;
  height: 37px;
  border-radius: 2px;
  background-color: hsl(200, 20%, 70%);
  animation: image-loading 1s linear infinite alternate;
`;
