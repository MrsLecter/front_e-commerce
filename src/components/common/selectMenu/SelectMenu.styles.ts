import styled from "styled-components";

export const StyledSelectMenu = styled.div`
  position: relative;
  width: 100%;
  min-width: 212px;
  margin-bottom: 6px;

  select {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding: 6px 8px;

    font-family: var(--font-roboto);
    font-size: 14px;
    letter-spacing: 0px;
    text-overflow: ellipsis;
    color: #364d66;
    border: none;
    border-radius: 2px;
    background-color: #ebf1f4;
    appearance: none;
    overflow: auto;
    cursor: pointer;
    opacity: 0.85;
  }

  select option {
    display: block;
    padding: 4px 4px 4px;
    min-height: 1.2em;
    width: inherit;
    padding: 6px;
    font-size: 12px;
    font-family: var(--font-roboto);
    text-overflow: ellipsis;
  }

  &::after {
    position: absolute;
    content: " 23424";
    top: 12px;
    right: 6px;
    width: 10px;
    height: 5px;
    justify-self: end;
    background-color: #364c67;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;
