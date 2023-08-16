import Image from "next/image";
import { FC, useRef, useState } from "react";

import { getLinksObjectArr } from "@/utils/functions";
import placeholder from "@images/rim-placeholder.png";

import {
  Next,
  Prev,
  Preview,
  Slide,
  StyledGallery,
  Thumbnail,
} from "./Gallery.styles";

interface Props {
  imageLinks: string[];
  loading: boolean;
}

const Gallery: FC<Props> = ({ imageLinks, loading }) => {
  const linksArr = getLinksObjectArr(imageLinks);
  const [isSlideSwitched, toggleSlideSwitch] = useState<boolean>(false);
  const [currSlide, setCurrSlide] = useState<{ id: number; link: string }>(
    linksArr[0]
  );
  const imageRef = useRef<HTMLImageElement>(null);

  const pickImageHandler = (item: { id: number; link: string }) => {
    if (currSlide.id !== item.id) {
      toggleSlideSwitch(true);
      if (imageRef.current) {
        imageRef.current.style.animation = "remove-slide 0.4s ease";
      }
      setTimeout(() => {
        setCurrSlide(item);
        toggleSlideSwitch(false);
      }, 400);

      if (imageRef.current) {
        imageRef.current.style.animation = "set-slide 0.4s ease";
      }
    }
  };
  const getPrev = () => {
    let prevId = currSlide.id - 1;
    if (prevId < 0) {
      prevId = linksArr.length - 1;
    }
    toggleSlideSwitch(true);
    if (imageRef.current) {
      imageRef.current.style.animation = "remove-slide 0.4s ease";
    }
    setTimeout(() => {
      setCurrSlide(linksArr[prevId]);
      toggleSlideSwitch(false);
    }, 400);

    if (imageRef.current) {
      imageRef.current.style.animation = "set-slide 0.4s ease";
    }
  };

  const getNext = () => {
    let nextId = currSlide.id + 1;
    if (nextId > linksArr.length - 1) {
      nextId = 0;
      toggleSlideSwitch(true);
      if (imageRef.current) {
        imageRef.current.style.animation = "remove-slide 0.4s ease-in";
      }
      setTimeout(() => {
        setCurrSlide(linksArr[nextId]);
        toggleSlideSwitch(false);
      }, 400);

      if (imageRef.current) {
        imageRef.current.style.animation = "set-slide 0.4s ease-out";
      }
    } else {
      toggleSlideSwitch(true);
      if (imageRef.current) {
        imageRef.current.style.animation = "remove-slide 0.4s ease-in";
      }
      setTimeout(() => {
        setCurrSlide(linksArr[nextId]);
        toggleSlideSwitch(false);
      }, 400);

      if (imageRef.current) {
        imageRef.current.style.animation = "set-slide 0.4s ease-out";
      }
    }
  };

  return (
    <StyledGallery>
      <Slide loading={loading} switches={isSlideSwitched}>
        <Image
          ref={imageRef}
          width={551}
          height={551}
          src={currSlide.link.length === 0 ? placeholder : currSlide.link}
          alt={"bigRim"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <Prev onClick={getPrev}>&#10094;</Prev>
        <Next onClick={getNext}>&#10095;</Next>
      </Slide>

      <Thumbnail loading={loading}>
        {linksArr.map((item) => {
          return (
            <Preview key={item.id} onClick={() => pickImageHandler(item)}>
              <Image
                src={item.link.length === 0 ? placeholder : item.link}
                width={48}
                height={48}
                alt="rim.png"
                style={{ width: "100%", height: "auto" }}
              />
            </Preview>
          );
        })}
      </Thumbnail>
    </StyledGallery>
  );
};

export default Gallery;
