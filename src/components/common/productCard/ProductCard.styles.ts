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

  div:first-child {
    position: absolute;
    top: 0px;
    left: 0px;
    ${(props) =>
      props.loading &&
      css`
        animation: image-loading 1s linear infinite alternate;
      `}
  }
`;

export const CardContent = styled.div`
  padding: 0px 12px 12px;
  width: 100%;
  font-family: var(--font-roboto);

  a {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #507299;
    letter-spacing: 0.5px;
  }

  p:nth-child(2) {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    letter-spacing: 0.5px;
  }

  p:nth-child(3) {
    margin-top:8px;
    margin-bottom: 12px;
    font-size: 10px;
    color: gray;
    letter-spacing: 0.4px;
  }
`;

export const LoadingName = styled.span`
  display: block;
  width: 200px;
  height: 18px;
  border-radius: 2px;
  background-color: hsl(200, 20%, 70%);
  animation: image-loading 1s linear infinite alternate;
`;

export const LoadingPrice = styled.div`
  margin-top: 4px;
  width: 80px;
  height: 15px;
  border-radius: 2px;
  background-color: hsl(200, 20%, 70%);
  animation: image-loading 1s linear infinite alternate;
`;

export const LoadingDiameters = styled.div`
  margin: 4px 0 13px 0;
  width: 50px;
  height: 11px;
  border-radius: 2px;
  background-color: hsl(200, 20%, 70%);
  animation: image-loading 1s linear infinite alternate;
`;
