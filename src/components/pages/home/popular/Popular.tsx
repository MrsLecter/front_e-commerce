import { FC, useEffect, useState } from "react";

import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";
import { useRouter } from "next/navigation";
import { AppRoutes, FIRST_PAGE_PARAM } from "@/constants/common";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";

import { popularRimsStub } from "@/constants/helpers";
import Link from "next/link";

const Popular: FC = () => {
  const router = useRouter();
  const [rims, setRims] = useState<IRimObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPopularRims = async () => {
      const response = await rimsService.getPopularRims();
      const popularRims = response.data.message.slice(0, 8);
      setRims((prev) => [...popularRims]);
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
            return (
              <ProductCard key={index} parameters={item} loading={loading} />
            );
          })}
        {rims.map((item, index) => {
          return (
            <ProductCard key={index} parameters={item} loading={loading} />
          );
        })}
      </CardContainer>
      <Link href={AppRoutes.Rims + "/all" + FIRST_PAGE_PARAM}>
        Показать все
      </Link>
    </StyledPopular>
  );
};
export default Popular;
