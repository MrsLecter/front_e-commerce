import styled from "styled-components";

export const StyledModalWrapper = styled.div<{ isActive: boolean }>`
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
  scrollbar-gutter: inherit;
  animation: ${(props) =>
    props.isActive
      ? "appearance 0.3s ease-in-out"
      : "disappearance 0.3s ease-in-out"};

  @keyframes appearance {
    from {
      padding-bottom: 250px;
      opacity: 0;
    }
    to {
      padding-top: 0px;
      opacity: 1;
    }
  }

  @keyframes disappearance {
    from {
      opacity: 1;
      padding-top: 0px;
    }
    to {
      opacity: 0;
      padding-bottom: 250px;
    }
  }
`;
