import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FC, Suspense, useEffect, useMemo, useRef, useState } from "react";

import rimsService from "@/api/rims-service";
import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";
import ProductCard from "@/components/common/productCard/ProductCard";
import ProductCardContainer from "@/components/common/productCardContainer/ProductCardContainer";
import { AppRoutes } from "@/constants/common";
import { popularRimsStub } from "@/constants/helpers";
import { IRimObject } from "@/types/common.types";
import {
  createQueryString,
  getRetrievedDiameters,
  getRimBrand,
  getRimsDiameterFiltered,
} from "@/utils/functions";

import { CardContainer } from "../home/popular/Popular.styles";
import Filter from "./elements/filter/Filter";
import {
  Message,
  ShowMoreBtnWrapper,
  StyledRimsFilter,
} from "./RimsFilter.styles";

const RimsFilter: FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const rimsBrand = searchParams!.get("brand");
  const rimsModel = searchParams!.get("model");
  const rimsYear = searchParams!.get("year");
  const currPage = searchParams!.get("page");
  const diametersRef = useRef<string>();
  const pageRef = useRef<number>();

  if (!pageRef.current) {
    pageRef.current = 1;
  }

  const [filterDiameters, setFilterDiameters] = useState<string[]>([]);
  const [retrievedDiameters, setRetrievedDiameters] = useState<string[]>([]);
  const [rimsList, setRimsList] = useState<IRimObject[]>();
  const [rimsResponse, setRimsResponse] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleRimsAmount, setVisibleRimsAmount] = useState<number>(
    pageRef.current * 8
  );

  useEffect(() => {
    if (!diametersRef.current) {
      setLoading(true);
      setRimsList((prev) => rimsResponse);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    if (diametersRef.current && diametersRef.current.length > 0) {
      setLoading(true);
      let newRimsList = getRimsDiameterFiltered({
        rims: rimsResponse || [],
        diameters: filterDiameters,
      });
      setRimsList((prev) => newRimsList);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [filterDiameters.join("-")]);

  const setDiametersHandler = (selectedDiameter: string) => {
    if (filterDiameters.includes(selectedDiameter)) {
      const newFilterDiameter = filterDiameters.filter(
        (item) => item !== selectedDiameter
      );
      setFilterDiameters((prev) => newFilterDiameter);
      diametersRef.current = newFilterDiameter.join("-");
    } else {
      setFilterDiameters((prev) => [...prev, selectedDiameter]);
      diametersRef.current = [...filterDiameters, selectedDiameter].join("-");
    }
  };

  const showMoreHandler = () => {
    if (
      pageRef.current &&
      !(
        visibleRimsAmount >= rimsResponse!.length &&
        visibleRimsAmount - 8 < rimsResponse!.length
      )
    ) {
      pageRef.current += 1;
      if (searchParams && rimsBrand && rimsModel && rimsYear && currPage) {
        let queryString = createQueryString({
          brand: rimsBrand,
          model: rimsModel,
          year: rimsYear,
          page: pageRef.current,
          searchParamsString: searchParams.toString(),
        });
        router.replace(queryString, { scroll: false });
      } else if (searchParams && currPage) {
        const routeParams = params!.params;
        const searchParamsString = new URLSearchParams(
          searchParams?.toString()
        );
        searchParamsString.set("page", String(pageRef.current));
        const queryString = searchParamsString.toString();

        router.replace(pathname + "?" + queryString, { scroll: false });
      }
      setVisibleRimsAmount((prev) => prev + 8);
    }
  };

  useEffect(() => {
    const getRimsByBrand = async () => {
      setLoading(true);
      setVisibleRimsAmount(8);
      const response = await rimsService.getRimsByBrand({
        rimBrand: getRimBrand((params!.params as string) || "all") || "all",
      });

      setRimsResponse((prev) => response.data.message);
      setRimsList((prev) => response.data.message.slice(0, visibleRimsAmount)); //
      const avaliableDiameters = getRetrievedDiameters(response.data.message);
      setRetrievedDiameters((prev) => avaliableDiameters);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    const getFilteredRims = async () => {
      setLoading(true);
      setVisibleRimsAmount(8);
      const response = await rimsService.getFilteredRims({
        brand: rimsBrand || "",
        model: rimsModel || "",
        year: rimsYear || "",
      });

      setRimsResponse((prev) => response.data.message);
      setRimsList((prev) => response.data.message.slice(0, visibleRimsAmount));
      const avaliableDiameters = getRetrievedDiameters(response.data.message);
      setRetrievedDiameters((prev) => avaliableDiameters);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (params!.params === "filter") {
      getFilteredRims();
    }
    if (params!.params !== "filter") {
      getRimsByBrand();
    }
  }, [params!.params as string, rimsBrand, rimsModel, rimsYear]);

  useEffect(() => {
    if (pageRef.current) {
      setVisibleRimsAmount(pageRef.current * 8);
      if (rimsResponse) {
        setRimsList((prev) => rimsResponse!.slice(0, visibleRimsAmount));
      }
    }
  }, [visibleRimsAmount, pageRef.current]);

  const FilterElement = useMemo(() => {
    return (
      <Filter
        rimBrand={getRimBrand((params!.params as string) || "")}
        rimFilterParams={[rimsBrand, rimsModel, rimsYear]}
        avaliableDiameters={retrievedDiameters}
        setFilterDiameters={(value: string) => setDiametersHandler(value)}
      />
    );
  }, [rimsBrand, rimsModel, rimsYear, retrievedDiameters.length]);

  return (
    <StyledRimsFilter>
      {FilterElement}
      {!loading && rimsList && rimsList.length === 0 && (
        <Message>Data not found</Message>
      )}
      <Suspense fallback={null}>
        <CardContainer marginTop={16}>
          {loading &&
            popularRimsStub.map((item) => {
              return (
                <ProductCard
                  key={item.rimId}
                  parameters={item}
                  loading={loading}
                />
              );
            })}

          {!loading &&
            rimsList &&
            rimsList.map((item) => {
              return (
                <ProductCard
                  key={item.rimId}
                  parameters={item}
                  loading={loading}
                />
              );
            })}
        </CardContainer>
      </Suspense>

      <ShowMoreBtnWrapper>
        <ShowMoreBtn clickHandler={showMoreHandler} />
      </ShowMoreBtnWrapper>
    </StyledRimsFilter>
  );
};

export default RimsFilter;
