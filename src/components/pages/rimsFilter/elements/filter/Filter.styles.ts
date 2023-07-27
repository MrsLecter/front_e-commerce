import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 8px;
  width: 100%;
  min-height: 218px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

  & > div {
    margin: 0px 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > div {
      padding: 8px;
    }
  }

  & > div:nth-child(1) {
    width: 50%;

    & > p {
      margin: 6px 0px;
      width: 100%;
      font-family: var(--font-roboto);
      font-weight: 400;
      letter-spacing: 0.3px;
    }

    & > p:first-child {
      color: black;
      font-size: 20px;
    }

    & > p:last-child {
      color: rgb(125, 125, 125);
      font-size: 14px;
    }
  }

  & > div:nth-child(2) {
    width: 30%;
    align-items: center;
  }

  & > div:nth-child(3) {
    width: 20%;
    height: 100%;
    overflow: auto;
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 766px) {
    min-width: 236px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-roboto);

    & > div:nth-child(1) {
      width: 100%;
      height: 84px;
      order: 1;

      & > p {
        text-align: center;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      height: 218px;
      order: 3;
    }

    & > div:nth-child(3) {
      width: 100%;
      height: 82px;
      align-items: center;
      order: 2;

      & > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const FilterHeader = styled.div`
  width: 100%;
  height: 32px;
  font-family: var(--font-roboto);
  font-size: 13px;
  border-left: 2px solid #517399;
  background-color: #f4f9fa;

  @media (max-width: 766px) {
    text-align: center;
    border-left: 2px solid #f4f9fa;
  }
`;
