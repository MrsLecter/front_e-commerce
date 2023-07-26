import { FC, useMemo, useState } from "react";
import {
  Next,
  Prev,
  Preview,
  Slide,
  StyledGallery,
  Thumbnail,
} from "./Gallery.styles";
import Image from "next/image";
import { getLinksObjectArr } from "@/utils/functions";
import placeholder from "@images/rim-placeholder.png";

interface Props {
  imageLinks: string[];
  loading: boolean;
}

const Gallery: FC<Props> = ({ imageLinks, loading }) => {
  const linksArr = getLinksObjectArr(imageLinks);
  const [currSlide, setCurrSlide] = useState<{ id: number; link: string }>(
    linksArr[0]
  );
  const getPrev = () => {
    let prevId = currSlide.id - 1;
    if (prevId < 0) {
      prevId = linksArr.length - 1;
    }
    setCurrSlide(linksArr[prevId]);
  };

  const getNext = () => {
    let nextId = currSlide.id + 1;
    if (nextId > linksArr.length - 1) {
      nextId = 0;
      setCurrSlide(linksArr[nextId]);
    } else {
      setCurrSlide(linksArr[nextId]);
    }
  };

  return (
    <StyledGallery>
      <Slide loading={loading}>
        <Image
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
            <Preview
              key={item.id}
              onClick={() => setCurrSlide(item)}
              haveBorder={item.id === currSlide.id}
            >
              <Image
                src={item.link.length === 0 ? placeholder : item.link}
                width={48}
                height={48}
                alt="rim.png"
              />
            </Preview>
          );
        })}
      </Thumbnail>
    </StyledGallery>
  );
};

export default Gallery;
