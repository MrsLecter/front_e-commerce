import styled from "styled-components";

export const StyledChoosing = styled.div`
  padding: 24px 32px 24px 32px;
  width: 488px;
  height: 252px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  div:first-child {
    width: 100%;
  }

  div:last-child {
    width: 212px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  div:last-child p {
    margin-top: 4px;
    margin-bottom: 8px;
    font-family: var(--font-roboto);
    font-size: 18px;
    letter-spacing: 0.6px;
    font-weight: 500;
    color: rgba(66, 95, 128, 0.78);
  }

  div:last-child div {
    margin-top: 4px;
  }

  div:last-child button {
    margin-top: 26px;
  }

  @media (max-width: 600px) {
    div:last-child p {
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 500px) {
    margin: 0 8px;
    padding: 24px 0px;
    width: calc(100% - 16px);
    justify-content: center;
    div:first-child {
      display: none;
    }
  }
`;
