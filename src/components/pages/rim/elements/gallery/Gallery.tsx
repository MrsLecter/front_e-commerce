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

const linkArr = [
  {
    id: 1,
    link: "https://rims-1neq.onrender.com/wo_01_chrome.jpg",
  },
  {
    id: 2,
    link: "https://rims-1neq.onrender.com/XR-050_HB_mini.jpg",
  },
  {
    id: 3,
    link: "https://rims-1neq.onrender.com/mk_150_ams.jpg",
  },
  {
    id: 4,
    link: "https://rims-1neq.onrender.com/XR-050_HB_mini.jpg",
  },
  {
    id: 5,
    link: "https://rims-1neq.onrender.com/zora_12_amb.jpg",
  },
];

const Gallery: FC = () => {
  const [currSlide, setCurrSlide] = useState<{ id: number; link: string }>(
    linkArr[0]
  );
  const getPrev = () => {
    let prevId = currSlide.id - 2;
    if (prevId < 0) {
      prevId = linkArr.length - 1;
    }
    setCurrSlide(linkArr[prevId]);
  };

  const getNext = () => {
    let nextId = currSlide.id + 1;
    if (nextId > linkArr.length) {
      nextId = 0;
      setCurrSlide(linkArr[nextId]);
    } else {
      setCurrSlide(linkArr[nextId - 1]);
    }
  };

  return (
    <StyledGallery>
      <Slide>
        <Image
          width={551}
          height={551}
          src={currSlide.link}
          alt={"bigRim"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <Prev onClick={getPrev}>&#10094;</Prev>
        <Next onClick={getNext}>&#10095;</Next>
      </Slide>

      <Thumbnail>
        {linkArr.map((item) => {
          return (
            <Preview
              key={item.id}
              onClick={() => setCurrSlide(item)}
              haveBorder={item.id === currSlide.id}
            >
              <Image src={item.link} width={48} height={48} alt="rim.png" />
            </Preview>
          );
        })}
      </Thumbnail>
    </StyledGallery>
  );
};

export default Gallery;
