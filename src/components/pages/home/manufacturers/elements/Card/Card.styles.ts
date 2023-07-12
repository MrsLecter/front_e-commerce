import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  width: 236px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);

  div:first-child {
    margin: 6px 5px 0px;
    padding-top: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    div {
      width: 100%;
      height: 42px;
    }

    button {
      padding: 6px 12px;
      width: 100%;
      font-family: var(--font-roboto);
      font-size: 14px;
      font-weight: 500;
      color: #425f80;
      letter-spacing: 0.5px;
      text-align: center;
      border: none;
      background-color: transparent;
      transition: duration, 0.2s;

      &:hover {
        background-color: #ebf0f5;
      }
    }
  }

  div:last-child {
    position: absolute;
    bottom: -6px;
    right: 0;
  }

  /* &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  } */

  @media (max-width: 990px) {
    padding: 0px 0 0 8px;
    margin-bottom: 16px;
    width: 362px;
    height: 160px;
    flex-direction: row;
    justify-content: flex-start;

    div:first-child {
      padding-top: 0px;
      width: 170px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (max-width: 760px) {
    padding: 8px 0 0 8px;
    margin-bottom: 8px;
    width: 360px;

    div:first-child {
      padding-top: 0px;

      button {
        background-color: #ebf0f5;

        &:hover {
          background-color: white;
        }
      }
    }
  }

  @media (max-width: 375px) {
    width: calc(100% - 16px);
    div:first-child {
      z-index: 1;
    }
  }
`;
