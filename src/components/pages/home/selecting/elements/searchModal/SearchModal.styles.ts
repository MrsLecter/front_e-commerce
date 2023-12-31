import styled from "styled-components";

export const StyledSearchModal = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  margin: 0px auto;
  width: 100%;
  height: 496px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 500px) {
    margin-top: 0px;
  }

  @media (max-width: 350px) {
    margin-top: 18px;
  }
`;

export const ModalContent = styled.div`
  margin: 42px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px,
    rgba(0, 0, 0, 0.22) 0px 10px 18px;

  @media (max-width: 500px) {
    margin: 40px auto 0;
    width: 100%;
  }

  @media (max-width: 350px) {
    margin: 40px auto 0;
  }
`;
