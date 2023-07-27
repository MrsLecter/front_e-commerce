import styled from "styled-components";

export const StyledBannerWrapper = styled.section`
  padding-top: 14px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: #f1f0f1;

  @media (max-width: 1020px) {
    margin-top: 22px;
  }
`;

export const StyledBanner = styled.div`
  padding: 36px 32px 16px;
  width: 992px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;

  div:first-child {
    width: 50%;
    object-fit: contain;
  }

  @media (max-width: 1020px) {
    width: 740px;
    height: 259px;

    div:first-child {
      margin-top: 28px;
      height: 150px;
    }
  }

  @media (max-width: 760px) {
    padding: 16px;
    margin: 0 auto;
    width: calc(100% - 16px);
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:first-child {
      margin-top: 16px;
      width: 100%;
      min-width: 464px;
      max-width: 464px;
      height: 250px;
    }
  }

  @media (max-width: 510px) {
    div:first-child {
      min-width: 364px;
      max-width: 364px;
      height: 180px;
    }
  }

  @media (max-width: 400px) {
    div:first-child {
      min-width: 264px;
      max-width: 264px;
      height: 120px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p:first-child {
    margin-bottom: 16px;
    font-family: var(--font-roboto);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 1.2px;

    color: #000;
    text-align: center;
  }

  p:nth-child(2) {
    padding: 2px 50px;
    font-family: var(--font-roboto);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-align: center;
  }

  button {
    margin-top: 26px;
    width: 180px;
  }

  @media (max-width: 1020px) {
    p:nth-child(2) {
      padding: 2px 46px;
    }

    button {
      margin-top: 16px;
    }
  }

  @media (max-width: 760px) {
    width: 100%;
    order: -1;

    p:nth-child(2) {
      padding: 2px 0px;
    }
  }
`;
