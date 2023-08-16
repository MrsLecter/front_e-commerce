import styled, { css } from "styled-components";

export const StyledProductCard = styled.div<{ loading: boolean }>`
  margin-bottom: 16px;
  position: relative;
  width: 236px;
  height: 356px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: #fff;

  & > div:first-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 236px;
    max-height: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border: 2px solid black; */
    /* object-fit: contain; */

    ${(props) =>
      props.loading &&
      css`
        animation: image-loading 1s linear infinite alternate;
      `}
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  padding: 0px 12px 12px;
  width: 100%;
  font-family: var(--font-roboto);

  p:nth-child(2) {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    letter-spacing: 0.5px;
  }

  p:nth-child(3) {
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 10px;
    color: gray;
    letter-spacing: 0.4px;
  }
`;

// export const LoadingName = styled.span`
//   display: block;
//   width: 200px;
//   height: 18px;
//   border-radius: 2px;
//   background-color: hsl(200, 20%, 70%);
//   animation: image-loading 1s linear infinite alternate;
// `;

// export const LoadingPrice = styled.div`
//   margin-top: 4px;
//   width: 80px;
//   height: 15px;
//   border-radius: 2px;
//   background-color: hsl(200, 20%, 70%);
//   animation: image-loading 1s linear infinite alternate;
// `;

// export const LoadingDiameters = styled.div`
//   margin: 4px 0 13px 0;
//   width: 50px;
//   height: 11px;
//   border-radius: 2px;
//   background-color: hsl(200, 20%, 70%);
//   animation: image-loading 1s linear infinite alternate;
// `;

export const ProductName = styled.div`
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #507299;
  letter-spacing: 0.5px;
`;

export const GetOrderBtn = styled.div`
  padding: 8px 12px;
  width: 100%;
  height: 32px;
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 1;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  background-color: #507298;

  &:hover,
  &:focus {
    opacity: 0.9;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.2s;
    /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19); */
  }
`;
