import styled from "styled-components";

export const StyledOrderModal = styled.div`
  width: 350px;
  height: 388px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
`;

export const OrderHeader = styled.div`
  padding: 24px 24px 2px;
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: var(--font-roboto);
  color: #7a8999;
  border-bottom: 1px solid #c4c8cc;
  background-color: #edeef1;
`;

export const Product = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProductPreview = styled.div`
  margin: 0 0px 0 2px;
  padding: 0 0 14px 0;
  width: 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductDescription = styled.div`
  padding: 0 0 0 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-roboto);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
    color: #7a8999;
  }
`;

export const Price = styled.div`
  padding: 4px 0;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.2px;
  border-top: 1px solid #c4c8cc;
`;

export const UserInputContainer = styled.div`
  padding: 26px 24px 24px 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const Message = styled.div`
  font-family: var(--font-roboto);
  font-size: 12px;
  letter-spacing: 0.6px;
  line-height: 12px;
  font-weight: 400;
  color: red;
`;
