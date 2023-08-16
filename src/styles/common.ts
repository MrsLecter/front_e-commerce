import styled from "styled-components";

export const LoadingButton = styled.div<{ height: number }>`
  margin: 4px 0;
  width: 100%;
  height: ${(props) => props.height + "px"};
  border-radius: 2px;
  background-color: #507298;
  animation: image-loading 1s linear infinite alternate;
`;

export const Message = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

