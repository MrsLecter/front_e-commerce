import styled from "styled-components";

export const StyledChoosing = styled.div`
  padding: 24px 32px 24px 32px;
  width: 488px;
  height: 256px;
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
