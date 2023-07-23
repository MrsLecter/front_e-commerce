import { FC, useEffect, useState } from "react";

import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";
import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";

const popularRims = [
  {
    rimId: "2986",
    name: "InziAone - VD 030",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/VD-0300MB.JPG",
    diameter: "19",
    price: 5667,
  },
  {
    rimId: "3407",
    name: "MKW - MK 36",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mk36.jpg",
    diameter: "20",
    price: 5888,
  },
  {
    rimId: "12264",
    name: "MKW - MK 36",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mk_36_amb.jpg",
    diameter: "18",
    price: 5299,
  },
  {
    rimId: "3593",
    name: "Marcello - MR 21",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mr_21_ammb.jpg",
    diameter: "18",
    price: 4416,
  },
  {
    rimId: "3531",
    name: "MKW - MK 150",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mk_150_ams.jpg",
    diameter: "18",
    price: 4416,
  },
  {
    rimId: "3473",
    name: "MKW - MK F74",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mk_f74_chrome.jpg",
    diameter: "17",
    price: 4710,
  },
  {
    rimId: "12264",
    name: "MKW - MK 36",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/mk_36_amb.jpg",
    diameter: "20",
    price: 5888,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://4ad3-87-244-131-197.ngrok-free.app/XR-050_HB_mini.jpg",
    diameter: "18",
    price: 5152,
  },
];

const Popular: FC = () => {
  const router = useRouter();
  const [rims, setRims] = useState<IRimObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const showAllRimsHandler = () => {
    router.push(AppRoutes.Rims);
  };

  useEffect(() => {
    const getPopularRims = async () => {
      const response = await rimsService.getPopularRims();
      console.log("get popular rims response", response);
      // setLoading(false);
      // setRims(response.message)
    };
    getPopularRims();
  }, []);

  return (
    <StyledPopular>
      <SectionHeader label={"Популярные модели"} />
      <CardContainer>
        {popularRims.map((item) => {
          return <ProductCard key={item.rimId} parameters={item} />;
        })}
      </CardContainer>
      <ShowMoreBtn clickHandler={showAllRimsHandler} />
    </StyledPopular>
  );
};
export default Popular;
