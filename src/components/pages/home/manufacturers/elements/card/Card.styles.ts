import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  width: 236px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;

  @media (max-width: 1020px) {
    padding: 0px 0 0 8px;
    margin-bottom: 16px;
    width: 362px;
    height: 160px;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (max-width: 760px) {
    padding: 8px 0 0 8px;
    margin-bottom: 8px;
    width: 488px;
  }

  @media (max-width: 500px) {
    padding: 0px 0 0 0px;
    min-width: 236px;
    width: 100%;
    max-width: calc(100% - 16px);
  }
`;

export const LogoWrapper = styled.div`
  margin: 16px 5px 2px;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > div:first-child {
    padding-left: 26px;
    width: 100%;
    height: 42px;
  }

  & > div:last-child {
    padding: 10px 16px;
    width: 180px;
    height: 36px;
    font-family: var(--font-roboto);
    font-size: 14px;
    font-weight: 500;
    color: #425f80;
    letter-spacing: 0.5px;
    text-align: center;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    transition: duration, 0.2s;
    opacity: 1;

    &:hover,
    &:focus {
      background-color: #ebf0f5;
      transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      transition-duration: 0.2s;
    }
  }

  @media (max-width: 1020px) {
    padding-top: 0px;
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 760px) {
    padding-top: 0px;
    div:last-child {
      background-color: #ebf0f5;
      &:hover {
        background-color: white;
      }
    }
  }

  @media (max-width: 500px) {
    margin: 0px auto 0px;
    z-index: 1;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  right: 0;

  @media (max-width: 1020px) {
    position: absolute;
    bottom: -5px;
    right: 0;
  }

  @media (max-width: 760px) {
    position: absolute;
    bottom: -5px;
    right: 0;
  }
`;
