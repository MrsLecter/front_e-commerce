import styled from "styled-components";

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 193px;
  padding: 8px 16px;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: var(--font-roboto);
  color: #7a8999;
  border-top: 1px solid #e4e8ed;

  @media (max-width: 660px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 510px) {
    padding-top: 16px;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: -14px;
  width: 252px;
  height: 100%;
  min-height: 100%;
  min-width: 252px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 660px) {
    width: 100%;
    min-width: 100%;
    height: 50px;
    min-height: 50px;
    justify-content: center;
    align-items: center;
  }
`;

export const LinksWrapper = styled.nav`
  width: 492px;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    font-size: 14px;
    font-weight: 400;
  }

  ul li {
    width: 100%;
    height: 16px;
    margin: 3px;
  }

  ul li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 660px) {
    padding: 32px;
    width: 100%;
    height: auto;

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    ul li {
      width: 45%;
      height: 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 660px) {
    ul li {
      width: 100%;
    }
  }
`;

export const ContactWrapper = styled.div`
  width: 252px;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 14px;
  font-weight: 400;

  p {
    margin-bottom: 8px;
  }

  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 660px) {
    width: 100%;
    height: 50px;
    min-height: 50px;
    justify-content: center;
    align-items: center;

    p {
      height: 24px;
    }
  }
`;
