import { FC, useEffect, useState } from "react";

import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";
import { AppRoutes } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";

import { popularRimsStub } from "@/constants/helpers";
import Link from "next/link";
import ProductCardStub from "@/components/common/LoadingStub/ProductCardStub/ProductCardStub";
import { Message } from "@/styles/common";
import {
  getPrepearedRimsData,
  setSearchParamForManufacturerFiltering,
} from "@/utils/functions";

const Popular: FC = () => {
  const [rims, setRims] = useState<IRimObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPopularRims = async () => {
      const response = await rimsService.getPopularRims();
      // const popularRims = response.data.message.slice(0, 8);
      const popularRims = getPrepearedRimsData(response.data.message).rims;
      console.log("popularRims: ", popularRims);
      setRims((prev) => popularRims);
      setLoading(false);
    };
    getPopularRims();
  }, []);

  return (
    <StyledPopular>
      <SectionHeader label={"Популярные модели"} />
      <CardContainer marginTop={32}>
        {loading &&
          popularRimsStub.map((item, index) => {
            return <ProductCardStub key={index} />;
          })}
        {!loading && rims && rims.length === 0 && (
          <Message>Data not found</Message>
        )}
        {!loading &&
          rims &&
          rims.length > 0 &&
          rims.map((item, index) => {
            return <ProductCard key={index} parameters={item} />;
          })}
      </CardContainer>
      {rims && rims.length > 0 && (
        <Link
          href={
            AppRoutes.Rims +
            "/all?" +
            setSearchParamForManufacturerFiltering("/all")
          }
        >
          Показать все
        </Link>
      )}
    </StyledPopular>
  );
};
export default Popular;
