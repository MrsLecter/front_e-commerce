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
    margin: 6px 5px 2px;
    padding-top: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    div {
      width: 100%;
      height: 42px;
    }

    & > a {
      padding: 8px 16px;
      width: 100%;
      height: 32px;
      font-family: var(--font-roboto);
      font-size: 14px;
      font-weight: 500;
      color: #425f80;
      letter-spacing: 0.5px;
      text-align: center;
      border: none;
      border-radius: 4px;
      background-color: transparent;
      transition: duration, 0.2s;

      &:hover,
      &:focus {
        background-color: #ebf0f5;
        opacity: 1;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        transition-duration: 0.45s;
      }
    }
  }

  div:last-child {
    position: absolute;
    bottom: -4px;
    right: 0;
  }

  @media (max-width: 1020px) {
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

    div:last-child {
      position: absolute;
      bottom: -5px;
      right: 0;
    }
  }

  @media (max-width: 760px) {
    padding: 8px 0 0 8px;
    margin-bottom: 8px;
    width: 488px;

    div:first-child {
      padding-top: 0px;

      button {
        background-color: #ebf0f5;

        &:hover {
          background-color: white;
        }
      }
    }
    div:last-child {
      position: absolute;
      bottom: -5px;
      right: 0;
    }
  }

  @media (max-width: 510px) {
    width: calc(100% - 16px);
    div:first-child {
      z-index: 1;
    }
  }
`;
