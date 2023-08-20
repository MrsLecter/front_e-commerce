import { FC, useEffect, useState } from "react";

import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";
import { AppRoutes } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";

import { RIMS_CONTAINER_COUNT } from "@/constants/helpers";
import Link from "next/link";

import { Message } from "@/styles/common";
import {
  getPrepearedRimsData,
  setSearchParamForManufacturerFiltering,
} from "@/utils/functions";
import ProductCardStub from "@/components/common/loadingStub/productCardStub/ProductCardStub";

const Popular: FC = () => {
  const [rims, setRims] = useState<IRimObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPopularRims = async () => {
      const response = await rimsService.getPopularRims();

      const popularRims = getPrepearedRimsData(response.data.message).rims;
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
          Array.apply(null, Array(RIMS_CONTAINER_COUNT)).map((item, index) => {
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
