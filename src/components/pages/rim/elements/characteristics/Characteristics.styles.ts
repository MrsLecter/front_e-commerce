import styled, { css } from "styled-components";

export const StyledChContainer = styled.div`
  margin-top: 26px;
  width: 411px;
  min-height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: var(--font-roboto);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

  @media (max-width: 1000px) {
    width: calc(100% - 16px);
    margin: 26px auto 0px;
    max-width: calc(100% - 16px);
  }
`;

export const ChHeader = styled.div`
  padding: 16px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  color: #757575;
  background-color: #fffefe;

  @media (max-width: 560px) {
    justify-content: center;
  }
`;

export const ChRow = styled.div<{ color?: string }>`
  position: relative;
  padding: 0px 16px;
  width: 100%;
  min-height: 36px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  color: #757575;
  background-color: ${(props) => (props.color ? props.color : " #fffefe")};

  div:first-child {
    position: absolute;
    top: 0;
    left: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 30px;
    height: 100%;
    background-color: ${(props) => (props.color ? props.color : "white")};
  }

  div:nth-child(2) {
    width: 90%;
    height: 20px;
    margin-top: auto;
    margin-bottom: auto;
    border-bottom: 1px dashed #757575;
  }

  div:last-child {
    max-width: 120px;
    height: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => (props.color ? props.color : "white")};
    color: #757575;
    line-height: 18px;
    margin: 2px;
    float: left;
    padding: 2px;

    span {
      margin: 2px;
      display: inline-block;
      border: 1px solid #757575;
      border-radius: 3px;
    }
  }

  @media (max-width: 560px) {
    padding: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:first-child {
      position: relative;
      left: 0;
      text-align: center;
    }

    div:nth-child(2) {
      display: none;
    }

    div:last-child {
      padding: 2px 0;
      max-width: 100%;
      text-align: center;
      align-self: center;
    }
  }
`;

export const LoadingHeader = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 2px;
`;
