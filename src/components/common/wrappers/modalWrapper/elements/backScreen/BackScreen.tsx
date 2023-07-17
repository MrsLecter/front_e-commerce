import { FC } from "react";
import styled from "styled-components";

interface IBackdropProps {
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const BackScreen: FC<IBackdropProps> = ({ backClickHandler }) => {
  return <StyledBackdrop onMouseDown={backClickHandler} />;
};

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.871);
  backdrop-filter: blur(77px);
  animation: appearing 0.3s ease-in-out;
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  overflow: hidden;

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default BackScreen;
