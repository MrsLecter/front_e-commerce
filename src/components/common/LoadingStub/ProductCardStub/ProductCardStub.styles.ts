import { styled } from "styled-components";

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
