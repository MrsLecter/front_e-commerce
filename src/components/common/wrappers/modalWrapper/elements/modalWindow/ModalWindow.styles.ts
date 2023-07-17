import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  min-width: 100vw;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  z-index: 101;
  scrollbar-gutter: stable;
`;
