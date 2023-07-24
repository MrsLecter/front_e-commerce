import styled from "styled-components";

export const StyledHeader = styled.header<{ color: "blue" | "none" }>`
  position: relative;
  width: 100%;
  height: 48px;
  background-color: ${(props) =>
    props.color === "blue" ? "#517399" : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media (max-width: 350px) {
    height: 90px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const HeaderContent = styled.div`
  height: inherit;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  div:last-child button {
    margin-left: 16px;
  }

  @media (max-width: 350px) {
    padding: 16px 0 0;
    height: 90px;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
