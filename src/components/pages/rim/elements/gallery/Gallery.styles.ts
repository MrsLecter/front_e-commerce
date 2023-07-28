import styled, { css } from "styled-components";

export const StyledGallery = styled.div`
  position: relative;
  margin: 0 auto;
  width: 551px;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  background-color: #fffefe;

  @media (max-width: 1000px) {
    margin-bottom: 0px;
    max-width: calc(100% - 16px);
    min-height: 631px;
  }

  @media (max-width: 560px) {
    min-height: 100%;
  }
`;

export const Thumbnail = styled.div<{ loading: boolean }>`
  padding: 16px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.loading &&
    css`
      animation: image-loading 1s linear infinite alternate;
    `}

  @media (max-width: 560px) {
    height: 100%;
    flex-wrap: wrap;
  }
`;

export const Preview = styled.div<{ haveBorder: boolean }>`
  margin: 0 2px;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.haveBorder ? "2px solid #507299" : "2px solid transparent"};

  &:hover {
    border: 1px solid #507299;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Prev = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 0;
  width: 41px;
  height: 83px;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 4px 4px 0;
  border: none;
  user-select: none;
  background-color: transparent;

  &:focus {
    background-color: black;
  }
`;

export const Next = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 0;
  width: 41px;
  height: 83px;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  user-select: none;

  border: none;
  border-radius: 4px 0 0 4px;
  background-color: transparent;

  &:focus {
    background-color: black;
  }
`;

export const Slide = styled.div<{ loading: boolean }>`
  width: 100%;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${(props) =>
    props.loading &&
    css`
      animation: image-loading 1s linear infinite alternate;
    `}

  &:hover, &:focus {
    button {
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      background-color: black;
    }
  }
`;
