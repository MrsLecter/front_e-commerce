import styled from "styled-components";

export const StyledOrderCall = styled.div`
  width: 364px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px,
    rgba(0, 0, 0, 0.22) 0px 10px 18px;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export const OrderCallContent = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #eceff1;

  & > div:last-child {
    margin-top: 16px;
    width: 144px;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
