import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 0px 16px 8px 16px;
  width: 100%;
  min-width: 992px;
  min-height: 218px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

  & > div {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > div {
      padding: 8px 8px 8px 14px;
    }
  }

  & > div:nth-child(1) {
    width: 52%;

    & > p {
      margin: 4px 0px;
      width: 100%;
      font-family: var(--font-roboto);
      font-weight: 400;
      letter-spacing: 0.3px;
    }

    & > p:first-child {
      margin-top:24px;
      color: black;
      font-size: 20px;
    }

    & > p:last-child {
      color: rgb(125, 125, 125);
      font-size: 14px;
    }
  }

  & > div:nth-child(2) {
    margin: 0px 8px;
    width: 26%;
    align-items: center;
  }

  & > div:nth-child(3) {
    width: 24%;
    height: 100%;
    overflow: auto;
    & > div {
      width: 100%;
    }
  }
  @media (max-width: 1020px) {
    padding: 16px;
    width: 100%;
    min-width: 236px;
  }

  @media (max-width: 766px) {
    width: 100%;
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

  @media (max-width: 766px) {
    height: 418px;
  }
`;

export const FilterHeader = styled.div`
  width: 100%;
  height: 32px;
  font-family: var(--font-roboto);
  font-size: 13px;
  border-left: 2px solid #517399;
  color: rgba(0, 0, 0, 0.87);
  background-color: #f4f9fa;

  @media (max-width: 766px) {
    text-align: center;
    border-left: 2px solid #f4f9fa;
  }
`;
