import { styled } from "styled-components";

export const StyledSuitableBlock = styled.div`
  position: relative;
  padding: 12px 16px 10px;
  margin-bottom: 16px;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px dashed #71b979;
  border-radius: 2px;
  background-color: #f0faf2;
`;

export const StyledCheckmark = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #71b979;
  border: 1px solid #71b979;
  background-color: #c0e5c9;

  &::before {
    content: "";
    position: relative;
    width: 11px;
    height: 5px;
    border: 1px solid #71b979;
    transform: rotate(-47deg);
    border-top: 0;
    border-right: 0;
    position: absolute;
    display: inline-block;
  }
`;

export const StyledDescription = styled.div`
  margin-left: 15px;
  p:first-child {
    color: #40914b;
    font-size: 14px;
  }
  p:last-child {
    margin-top: 4px;
    color: #71b979;
    font-size: 12px;
  }
`;
