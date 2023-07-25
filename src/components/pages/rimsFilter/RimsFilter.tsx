import ProductCard from "@/components/common/productCard/ProductCard";
import ProductCardContainer from "@/components/common/productCardContainer/ProductCardContainer";
import { FC, useEffect, useRef, useState } from "react";
import { ShowMoreBtnWrapper, StyledRimsFilter } from "./RimsFilter.styles";
import Filter from "./elements/filter/Filter";
import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";
import { useParams, useSearchParams } from "next/navigation";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";
import { popularRimsStub } from "@/constants/helpers";
import {
  getRetrievedDiameters,
  getRimBrand,
  getRimsDiameterFiltered,
} from "@/utils/functions";
import { CardContainer } from "../home/popular/Popular.styles";

const RimsFilter: FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const rimsBrand = searchParams.get("brand");
  const rimsModel = searchParams.get("model");
  const rimsYear = searchParams.get("year");
  const diametersRef = useRef<string>();

  const [filterDiameters, setFilterDiameters] = useState<string[]>([]);
  const [retrievedDiameters, setRetrievedDiameters] = useState<string[]>([]);
  const [rimsList, setRimsList] = useState<IRimObject[]>();
  const [rimsResponse, setRimsResponse] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);

  console.log("filterDiameters: ", filterDiameters, filterDiameters.join("-"));

  useEffect(() => {
    console.log(
      "---------------diametersRef.current:",
      diametersRef.current,
      !diametersRef.current
    );
    if (!diametersRef.current) {
      console.log("without filter", rimsList);
      setLoading(true);
      setRimsList((prev) => rimsResponse);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    if (diametersRef.current && diametersRef.current.length > 0) {
      console.log(
        "width filter ",
        diametersRef.current,
        diametersRef.current.length
      );
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
    alert("show more");
  };

  useEffect(() => {
    console.log(">>>>>run download data");
    const getRimsByBrand = async () => {
      setLoading(true);
      const response = await rimsService.getRimsByBrand({
        rimBrand: getRimBrand(params.params || "all") || "all",
      });
      // console.log("rim by brand response", response);
      setRimsResponse((prev) => response.data.message);
      setRimsList((prev) => response.data.message);
      const avaliableDiameters = getRetrievedDiameters(response.data.message);
      setRetrievedDiameters((prev) => avaliableDiameters);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    const getFilteredRims = async () => {
      setLoading(true);
      const response = await rimsService.getFilteredRims({
        brand: rimsBrand || "",
        model: rimsModel || "",
        year: rimsYear || "",
      });
      // console.log("filter response", response);
      setRimsResponse((prev) => response.data.message);
      setRimsList((prev) => response.data.message);
      const avaliableDiameters = getRetrievedDiameters(response.data.message);
      setRetrievedDiameters((prev) => avaliableDiameters);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (params.params === "filter") {
      getFilteredRims();
    }
    if (params.params !== "filter") {
      getRimsByBrand();
    }
  }, [params.params]);

  console.log("rim brand", rimsBrand, rimsModel, rimsYear);
  return (
    <StyledRimsFilter>
      <Filter
        rimBrand={getRimBrand(params.params || "")}
        rimFilterParams={[rimsBrand, rimsModel, rimsYear]}
        avaliableDiameters={retrievedDiameters}
        setFilterDiameters={(value: string) => setDiametersHandler(value)}
      />
      <CardContainer isReady={loading}>
        {loading &&
          popularRimsStub.map((item) => {
            return <ProductCard key={item.rimId} parameters={item} />;
          })}
        {!loading &&
          rimsList &&
          rimsList.map((item) => {
            return <ProductCard key={item.rimId} parameters={item} />;
          })}
      </CardContainer>
      <ShowMoreBtnWrapper>
        <ShowMoreBtn clickHandler={showMoreHandler} />
      </ShowMoreBtnWrapper>
    </StyledRimsFilter>
  );
};

export default RimsFilter;
