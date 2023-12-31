import styled from "styled-components";

export const StyledContactModal = styled.div`
  width: 350px;
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export const ModalHeader = styled.div`
  padding: 16px;
  width: 100%;
  height: auto;
  font-family: var(--font-roboto);
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  text-transform: uppercase;
  color: #7a8999;
  background-color: #eceff1;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 1px solid #c4c8cc;
  z-index: 2;

  @media (max-width: 360px) {
    text-align: center;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
  width: 100%;
  height: auto;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: white;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px,
    rgba(0, 0, 0, 0.22) 0px 10px 18px;

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
