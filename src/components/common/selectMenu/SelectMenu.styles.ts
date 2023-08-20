import styled from "styled-components";

export const StyledSelectMenu = styled.div<{ type?: string }>`
  position: relative;
  width: 100%;
  min-width: 212px;
  margin-bottom: 6px;

  select {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding: 0px 8px;
    height: ${(props) => (props.type === "large" ? "36px" : "30px")};

    font-family: var(--font-roboto);
    font-size: ${(props) => (props.type === "large" ? "14px" : "13px")};
    letter-spacing: 0px;
    text-overflow: ellipsis;
    color: #364d66;
    border: none;
    border-radius: 4px;
    background-color: ${(props) =>
      props.type === "large" ? "#e4e9ec" : "#ebf1f4"};
    appearance: none;
    overflow: auto;
    cursor: pointer;
    opacity: 0.8;

    &:focus,
    &:hover:enabled {
      opacity: 1;
      cursor: pointer;
    }

    &:disabled {
      color: #364d66;
      opacity: 0.5;
    }
  }

  select option {
    display: block;
    padding: 4px 4px 4px;
    min-height: 1.2em;
    width: inherit;
    padding: 6px;
    font-size: 14px;
    font-family: var(--font-roboto);
    text-overflow: ellipsis;
    background-color: white;
  }

  &::after {
    position: absolute;
    content: " 23424";
    top: ${(props) => (props.type === "large" ? "15px" : "12px")};
    right: 6px;
    width: 10px;
    height: 5px;
    justify-self: end;
    background-color: #364c67;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;
