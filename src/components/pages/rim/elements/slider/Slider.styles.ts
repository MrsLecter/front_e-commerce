import styled, { css } from "styled-components";

export const StyledSlider = styled.div`
  position: relative;
  margin: 0 auto;
  width: 551px;
  height: 551px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 4px;
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
  height: 90px;
  min-height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: ${(props) => (props.loading ? "hidden" : "auto")};
  ${(props) =>
    props.loading &&
    css`
      animation: image-loading 2s linear infinite alternate;
    `}

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

export const Preview = styled.div`
  margin: 0 2px;
  width: 52px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #507299;
  overflow: hidden;

  &:hover {
    border: 2px solid #507299;
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
  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    background-color: black;
    opacity: 1;
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
  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    background-color: black;
    opacity: 1;
  }
`;

export const Slide = styled.div<{
  loading: boolean;
  switches: boolean;
}>`
  width: 100%;
  height: 551px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.3, 0, 0.4, 1);
    transition-timing-function: cubic-bezier(0.3, 0, 0.4, 1);
    animation: ${(props) =>
      props.switches
        ? "remove-image 0.4s ease-in-out 0.2s"
        : "set-image 0.4s ease-in-out"};
  }

  &:hover {
    button {
      transition: opacity 0.3s ease-in-out;
      background-color: black;
      opacity: 0.7;
    }
  }

  @keyframes switch-slide {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.4;
    }
  }

  @keyframes set-image {
    0% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes remove-image {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.4;
    }
  }
`;
