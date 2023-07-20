import styled from "styled-components";

export const StyledContactModal = styled.div`
  width: 350px;
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 20px;
  width: 100%;
  height: 77px;
  font-family: var(--font-roboto);
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  text-transform: uppercase;
  color: #7a8999;
  background-color: #eceff1;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom: 1px solid #c4c8cc;

  @media (max-width: 360px) {
    text-align: center;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
  width: 100%;
  height: 239px;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  background-color: white;

  button {
    margin-top: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div:nth-child(2) {
    margin-top: 16px;
  }

  a {
    color: #7a8999;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 360px) {
    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
