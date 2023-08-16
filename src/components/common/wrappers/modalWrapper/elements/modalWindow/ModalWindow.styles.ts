import styled, { css } from "styled-components";

export const StyledModalWrapper = styled.div<{
  isActive: boolean;
  hasAnimation: boolean;
}>`
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 101;
  scrollbar-gutter: ${(props) => (props.isActive ? "stable" : "auto")};
  transition: 0.5s top ease;

  ${(props) =>
    props.hasAnimation &&
    css`
      animation: ${(isActive) =>
        isActive
          ? "appearance 0.3s ease-in-out"
          : "disappearance 0.4s ease-in-out"};
    `}

  @keyframes appearance {
    from {
      padding-bottom: 100px;
      opacity: 0;
    }
    to {
      padding-bottom: 0px;
      opacity: 1;
    }
  }

  @keyframes disappearance {
    from {
      top: 0px;
      opacity: 1;
      /* scrollbar-gutter: auto; */
    }
    to {
      top: -100px;
      opacity: 0;
      /* scrollbar-gutter: auto; */
    }
  }
`;
