import styled from "styled-components";

export const LoadingButton = styled.div<{ height: number }>`
  margin: 4px 0;
  width: 100%;
  height: ${(props) => props.height + "px"};
  border-radius: 2px;
  background-color: #507298;
  animation: image-loading 1s linear infinite alternate;
`;
