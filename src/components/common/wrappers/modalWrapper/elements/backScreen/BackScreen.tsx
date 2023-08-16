import { FC } from "react";
import styled, { css } from "styled-components";

interface IBackdropProps {
  isAppearing: boolean;
  backClickHandler: () => void;
  hasAnimation?: boolean;
}

const BackScreen: FC<IBackdropProps> = ({
  isAppearing,
  backClickHandler,
  hasAnimation = true,
}) => {
  return (
    <StyledBackdrop
      onMouseDown={backClickHandler}
      isAppearing={isAppearing}
      hasAnimation={hasAnimation}
    />
  );
};

export const StyledBackdrop = styled.div<{
  isAppearing: boolean;
  hasAnimation: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.54);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  scrollbar-gutter: stable;
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  overflow: hidden;

  ${(props) =>
    props.hasAnimation &&
    css`
      animation: ${(isAppearing) =>
        isAppearing ? "appearance 0.1s ease-in" : "disappearance 0.1s ease-in"};
    `}

  @keyframes appearance {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes disappearance {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.7;
    }
  }
`;

export default BackScreen;
