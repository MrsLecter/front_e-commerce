import styled from "styled-components";

export const StyledLogo = styled.div<{ color: string }>`
  padding: 2px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 14px;
    font-family: var(--font-rubik);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.9px;
    line-height: 48px;
    color: ${(props) => (props.color === "gray" ? "#7A8999" : "#fff")};
    white-space: nowrap;
  }
`;
