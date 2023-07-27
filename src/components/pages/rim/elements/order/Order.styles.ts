import styled from "styled-components";

export const StyledOrder = styled.div`
  position: relative;
  padding: 8px 16px;
  margin-bottom: 26px;
  width: 411px;
  height: 246px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  background-color: #fffefe;

  @media (max-width: 1000px) {
    margin: 26px auto;
    width: 100%;
    max-width: calc(100% - 16px);
  }
`;

export const StyledAlert = styled.div`
  position: absolute;
  top: 40px;
  left: -240px;
  width: 260px;
  height: 60px;
  padding: 11px 17px;
  color: rgba(0, 0, 0, 0.871);
  text-align: left;
  border-radius: 1px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #c4c8cc;
  z-index: 120;
  animation: translate-hor linear 2s infinite;

  &:after {
    content: " ";
    position: absolute;
    border-radius: 1px;
    border-right: 1px solid #c4c8cc;
    border-top: 1px solid #c4c8cc;
    right: -7px;
    top: 24px;
    height: 12px;
    width: 12px;
    transform: rotate(45deg);
    background-color: #fff;
  }

  @media (max-width: 600px) {
    left: 50px;
  }

  @keyframes translate-hor {
    0% {
      transform: translateZ(0);
    }
    25% {
      transform: translate3d(-1.5%, 0, 0);
    }
    50% {
      transform: translate3d(-3%, 0, 0);
    }
    75% {
      transform: translate3d(-1.5%, 0, 0);
    }
    100% {
      transform: translateZ(0);
    }
  }
`;

export const LoadingOrderHeader = styled.div`
  margin: 8px 0px 16px;
  width: 65%;
  height: 22px;
  border-radius: 2px;
  background-color: #507298;
  animation: image-loading 1s linear infinite alternate;
`;

export const LoadingOrderMenu = styled.div`
  margin: 8px 0px;
  width: 379px;
  height: 36px;
  border-radius: 2px;
  background-color: #507298;
  animation: image-loading 1s linear infinite alternate;

  @media (max-width: 600px) {
    width: calc(100% - 16px);
  }
`;

export const LoadingOrderPrice = styled.div`
  margin: 16px 0px;
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    width: 100px;
    height: 100%;
    border-radius: 2px;
    background-color: #507298;
    animation: image-loading 1s linear infinite alternate;
  }
`;

export const LoadingDescription = styled.div`
  margin: 8px auto;
  width: 90%;
  height: 28px;
  border-radius: 2px;
  background-color: #507298;
  animation: image-loading 1s linear infinite alternate;
`;
