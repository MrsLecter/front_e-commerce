import styled from "styled-components";

export const StyledBannerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
`;

export const StyledBanner = styled.div`
  padding: 36px 32px 12px;
  width: 740px;
  height: 259px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;

  div:first-child {
    width: 55%;
  }

  @media (max-width: 760px) {
    margin: 0 auto;
    width: calc(100% - 16px);
    height: 403px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:first-child {
      margin-top: 16px;
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p:first-child {
    font-family: var(--font-roboto);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 16px;
    color: #000;
    text-align: center;
  }

  p:nth-child(2) {
    padding: 0 43px;
    font-family: var(--font-roboto);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-align: center;
  }

  button {
    margin-top: 16px;
    width: 180px;
  }

  @media (max-width: 760px) {
    width: 100%;
    order: -1;
  }
`;
