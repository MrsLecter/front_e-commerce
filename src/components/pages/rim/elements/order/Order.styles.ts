import styled from "styled-components";

export const StyledOrder = styled.div`
  position: relative;
  padding: 8px 16px;
  margin-bottom: 26px;
  width: 411px;
  height: 246px;
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
