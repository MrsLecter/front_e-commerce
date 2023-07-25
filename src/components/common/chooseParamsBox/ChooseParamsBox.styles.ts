import styled from "styled-components";

export const ChoosingContent = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-top: 2px;
    margin-bottom: 6px;
    font-family: var(--font-roboto);
    font-size: 18px;
    letter-spacing: 0.6px;
    font-weight: 500;
    color: rgba(66, 95, 128, 0.78);
  }

  div {
    /* margin-top: 4px; */
  }

  button {
    /* margin-top: 26px; */
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }
`;

export const Message = styled.div`
  padding-bottom: 4px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: var(--font-roboto);
  font-size: 12px;
  letter-spacing: 0.6px;
  line-height: 12px;
  font-weight: 400;
  color: red;
`;
