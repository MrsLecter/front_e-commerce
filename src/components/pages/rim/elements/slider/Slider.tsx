import Image from "next/image";
import { FC, useState } from "react";

import { getLinksObjectArr } from "@/utils/functions";
import placeholder from "@images/rim-placeholder.png";
import {
  Next,
  Prev,
  Preview,
  Slide,
  StyledSlider,
  Thumbnail,
} from "./Slider.styles";

interface Props {
  imageLinks: string[];
  loading: boolean;
}

const Slider: FC<Props> = ({ imageLinks, loading }) => {
  const linksArr = getLinksObjectArr(imageLinks);
  const [isSlideSwitched, toggleSlideSwitch] = useState<boolean>(false);
  const [currSlide, setCurrSlide] = useState<{ id: number; link: string }>(
    linksArr[0]
  );

  const pickImageHandler = (item: { id: number; link: string }) => {
    if (currSlide.id !== item.id) {
      toggleSlideSwitch(true);
      setTimeout(() => {
        toggleSlideSwitch(false);
        setCurrSlide(item);
      }, 400);
    }
  };
  const getPrev = () => {
    let prevId = currSlide.id - 1;
    if (prevId < 0) {
      prevId = linksArr.length - 1;
    }
    toggleSlideSwitch(true);
    setTimeout(() => {
      toggleSlideSwitch(false);
      setCurrSlide(linksArr[prevId]);
    }, 400);
  };

  const getNext = () => {
    let nextId = currSlide.id + 1;
    if (nextId > linksArr.length - 1) {
      nextId = 0;
      toggleSlideSwitch(true);
      setTimeout(() => {
        toggleSlideSwitch(false);
        setCurrSlide(linksArr[nextId]);
      }, 400);
    } else {
      toggleSlideSwitch(true);
      setTimeout(() => {
        toggleSlideSwitch(false);
        setCurrSlide(linksArr[nextId]);
      }, 400);
    }
  };

  return (
    <StyledSlider>
      <Slide loading={loading} switches={isSlideSwitched}>
        {!loading && (
          <Image
            width={551}
            height={551}
            src={currSlide.link}
            alt={"bigRim"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
        {loading && (
          <Image
            width={551}
            height={551}
            src={placeholder}
            alt={"bigRim"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
        <Prev onClick={getPrev}>&#10094;</Prev>
        <Next onClick={getNext}>&#10095;</Next>
      </Slide>

      <Thumbnail loading={loading}>
        {!loading &&
          linksArr &&
          linksArr.map((item) => {
            return (
              <Preview key={item.id} onClick={() => pickImageHandler(item)}>
                <Image
                  src={item.link}
                  width={48}
                  height={48}
                  alt="rim.png"
                  style={{ width: "100%", height: "auto" }}
                />
              </Preview>
            );
          })}
        {loading && (
          <Preview key={111}>
            <Image
              src={placeholder}
              width={48}
              height={48}
              alt="rim.png"
              style={{ width: "100%", height: "auto" }}
            />
          </Preview>
        )}
      </Thumbnail>
    </StyledSlider>
  );
};

export default Slider;
