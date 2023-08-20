import styled from "styled-components";

export const AboutHeader = styled.div`
  margin: 16px 0;
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

  button {
    font-size: 15px;
    letter-spacing: 0.5px;
    color: rgb(80, 114, 153);
    text-decoration: underline;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export const ContactLink = styled.a`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
