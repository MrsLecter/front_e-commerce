import styled from "styled-components";

export const StyledAbout = styled.div`
  margin: 16px auto;
  padding: 8px 16px;
  width: calc(100% - 16px);
  min-width: 230px;
  max-width: 960px;
  min-height: 777px;
  background-color: #fefeff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
`;

export const AboutHeader = styled.div`
  margin: 12px 0;
  width: 100%;
  font-family: var(--font-roboto);
  font-size: 19px;
  letter-spacing: 0.6px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
`;

export const Paragraph = styled.div`
  font-family: var(--font-roboto);

  p {
    margin: 0px;
    padding: 1px 0;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.87);
  }

  a {
    padding: 2px 0;
    text-decoration: underline;
    color: rgb(80, 114, 153);
  }
`;
