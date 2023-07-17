import styled from "styled-components";

export const StyledChContainer = styled.div`
  width: 411px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: var(--font-roboto);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
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
`;

export const ChRow = styled.div<{ color?: string }>`
  position: relative;
  padding: 0px 16px;
  width: inherit;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  color: #757575;
  background-color: ${(props) => (props.color ? props.color : "white")};

  div:first-child {
    position: absolute;
    top: 0;
    left: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 30px;
    height: 100%;
    background-color: ${(props) => (props.color ? props.color : "white")};
  }

  div:nth-child(2) {
    width: 100%;
    height: 70%;
    border-bottom: 1px dashed black;
  }

  div:last-child {
    position: absolute;
    top: 0;
    right: 8px;
    height: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => (props.color ? props.color : "white")};

    span {
      display: inline-block;
      border: 1px solid #757575;
      color: #757575;
      line-height: 18px;
      border-radius: 3px;
      margin: 2px;
      float: left;
      padding: 2px;
    }
  }
`;
