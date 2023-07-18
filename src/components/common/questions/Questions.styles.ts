import styled from "styled-components";
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

export const QuestionImage = styled.div`
  width: 118px;
  height: 100%;
`;

export const QuestionContent = styled.div`
  padding-left: 16px;
  width: calc(100% - 126px);
  height: 100%;
  font-family: var(--font-roboto);
  text-align: start;
  background-color: white;

  p {
    margin: 0 5px;
  }

  p:first-child {
    font-size: 18px;
    font-weight: 400;
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
    margin: 5px 0;
  }

  @media (max-width: 560px) {
    padding-left: 0px;
    width: 100%;
  }
`;

/* export const QuestionsWrapper = styled.section` */
/* display: none; */
/* padding-top: 0px; */
/* width: 100%;
  height: 100%; */
/* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start; */
/* background-color: #f0f0f0; */

/* @media (max-width: 760px) {
    display: block;
    padding-top: 20px;
  } 
`;
export const QuestionContent = styled.div`
  /* padding: 12px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* width: calc(100% - 16px); */
/* display: flex; */
/* flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: var(--font-roboto);
  text-align: start;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: white;

  div:first-child {
    width: 110px;
    height: 100%;
    background-color: lightgreen;
  }

  div:last-child {
     width: calc(100% - 130px);
    height:100%; 
    padding-left: 20px;
    background-color: lightblue;
  }

  p {
    margin: 0 5px;
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
    width: 100%;
    margin: 5px 0;
  } */

/* @media (max-width: 760px) {
    display: flex;
  } */

/* @media (max-width: 1000px) {
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
 */
