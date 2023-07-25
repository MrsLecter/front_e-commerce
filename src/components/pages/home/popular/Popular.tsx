import { FC, useEffect, useState } from "react";

import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";
import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";

import { popularRimsStub } from "@/constants/helpers";
import { getSertedRimData } from "@/utils/functions";

const Popular: FC = () => {
  const router = useRouter();
  const [rims, setRims] = useState<IRimObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const showAllRimsHandler = () => {
    router.push(AppRoutes.Rims + "/all");
  };

  useEffect(() => {
    const getPopularRims = async () => {
      const response = await rimsService.getPopularRims();
      const popularRims = response.data.message.slice(0, 8);
      console.log(popularRims);
      setRims((prev) => [...popularRims]);
      setLoading(false);
    };
    getPopularRims();
  }, []);

  return (
    <StyledPopular>
      <SectionHeader label={"Популярные модели"} />
      <CardContainer isReady={loading}>
        {loading &&
          popularRimsStub.map((item, index) => {
            return <ProductCard key={index} parameters={item} />;
          })}
        {rims.map((item, index) => {
          return <ProductCard key={index} parameters={item} />;
        })}
      </CardContainer>
      <ShowMoreBtn clickHandler={showAllRimsHandler} />
    </StyledPopular>
  );
};
export default Popular;
