import styled from "styled-components";

export const StyledOrderCall = styled.div`
  width: 364px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export const OrderCallContent = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #eceff1;

  & > div:last-child {
    width: 144px;
  }
`;
