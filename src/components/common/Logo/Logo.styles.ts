import styled from "styled-components";

export const StyledLogo = styled.div<{ color: string }>`
  padding: 2px;
  margin-left: ${(props) => (props.color === "white" ? "-8px" : "-4px")};
  width: 145px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    margin-top: -4px;
    margin-left: 8px;
    font-family: var(--font-rubik);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.9px;
    line-height: 48px;
    color: ${(props) => (props.color === "gray" ? "#7A8999" : "#fff")};
    white-space: nowrap;
  }
`;
