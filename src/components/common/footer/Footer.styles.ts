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
  max-width: 1024px;
  padding: 8px 16px;
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
`;

export const LogoWrapper = styled.div`
  margin-top: 18px;
  width: 20%;
  height: 100%;
  min-height: 100%;
  min-width: 244px;
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
  width: 45%;
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
    height: 25px;
    margin: 3px;
  }

  ul li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 660px) {
    padding: 30px;
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
      text-align: center;
    }
  }

  @media (max-width: 660px) {
    ul li {
      width: 100%;
    }
  }
`;

export const ContactWrapper = styled.div`
  width: 40%;
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
    height: 25px;
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
  }
`;
