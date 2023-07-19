import styled from "styled-components";

export const StyledContactModal = styled.div`
  width: 350px;
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 20px;
  width: 100%;
  height: 77px;
  font-family: var(--font-roboto);
  font-size: 22px;
  line-height: 32px;
  font-weight: 400;
  background-color: #eceff1;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom: 1px solid #c4c8cc;
`;

export const ModalContent = styled.div`
  padding: 24px;
  width: 100%;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  background-color: white;

  button {
    margin-top: 24px;
  }
`;
