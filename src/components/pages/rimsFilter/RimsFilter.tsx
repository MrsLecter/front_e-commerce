import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FC, Suspense, useEffect, useMemo, useRef, useState } from "react";

import rimsService from "@/api/rims-service";
import ProductCard from "@/components/common/productCard/ProductCard";
import { RIMS_CONTAINER_COUNT } from "@/constants/helpers";
import { IRimObject } from "@/types/common.types";
import {
  createQueryString,
  getPrepearedRimsData,
  getRimBrand,
  getRimsDiameterFiltered,
  setSearchParamForFilter,
} from "@/utils/functions";

import ProductCardStub from "@/components/common/loadingStub/productCardStub/ProductCardStub";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { setCarProps } from "@/store/reducers/carSlice";
import { CardContainer } from "../home/popular/Popular.styles";
import {
  Message,
  ShowMoreBtnWrapper,
  StyledRimsFilter,
} from "./RimsFilter.styles";
import Filter from "./elements/filter/Filter";
import ShowMoreBtn from "./elements/showMoreBtn/ShowMoreBtn";

const RimsFilter: FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const {
    makerName: storeMakerName,
    modelName: storeModelName,
    year: storeYear,
  } = useAppSelector((store) => store.carReducer);

  const router = useRouter();
  const carBrand = searchParams!.get("maker_name");
  const carModel = searchParams!.get("model_name");
  const carYear = searchParams!.get("year");
  const currPage = searchParams!.get("page");
  const rimsBrand = searchParams!.get("brand");
  const rimsDiameter = searchParams!.get("diameter");

  if (
    storeMakerName !== carBrand ||
    storeModelName !== carModel ||
    storeYear !== carYear
  ) {
    dispatch(
      setCarProps({
        makerName: carBrand as string,
        modelName: carModel as string,
        year: carYear as string,
      })
    );
  }

  const diametersRef = useRef<string>();
  const pageRef = useRef<number>();
  if (diametersRef) {
    diametersRef.current =
      rimsDiameter && rimsDiameter !== "all" ? rimsDiameter : "";
  }

  if (!pageRef.current) {
    pageRef.current = currPage !== null ? +currPage : 1;
  }

  const [filterDiameters, setFilterDiameters] = useState<string[]>([]);
  const [retrievedDiameters, setRetrievedDiameters] = useState<string[]>([]);
  const [rimsList, setRimsList] = useState<IRimObject[]>();
  const [rimsResponse, setRimsResponse] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleRimsAmount, setVisibleRimsAmount] = useState<number>(
    pageRef.current * 40
  );

  useEffect(() => {
    if (diametersRef.current && diametersRef.current.length > 0) {
      setLoading(true);
      const newRimsList = getRimsDiameterFiltered({
        rims: rimsResponse || [],
        diameters: diametersRef.current.split("+"),
      });
      setRimsList((prev) => newRimsList);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    if (!diametersRef.current) {
      setLoading(true);
      setRimsList((prev) => rimsResponse?.slice(0, visibleRimsAmount));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [diametersRef.current]);

  const setDiametersHandler = (selectedDiameter: string) => {
    if (diametersRef.current) {
      const oldDiamArr = diametersRef.current.split("+");
      const isDiamExist = oldDiamArr.filter(
        (item) => item === selectedDiameter
      );
      if (!isDiamExist.length) {
        setFilterDiameters((prev) => [...prev, selectedDiameter]);
        diametersRef.current = [...oldDiamArr, selectedDiameter].join("+");
      }
      if (isDiamExist.length > 0) {
        const filteredArr = oldDiamArr.filter(
          (item) => item !== selectedDiameter
        );
        setFilterDiameters((prev) => filteredArr);
        diametersRef.current = filteredArr.join("+");
      }
    } else if (!diametersRef.current) {
      setFilterDiameters((prev) => [selectedDiameter]);
      diametersRef.current = selectedDiameter;
    }
    const filterDiameters = setSearchParamForFilter(
      diametersRef.current,
      searchParams?.toString() || ""
    );

    router.replace(pathname + "?" + filterDiameters, {
      scroll: false,
    });
  };

  const showMoreHandler = () => {
    if (
      pageRef.current &&
      !(
        visibleRimsAmount >= rimsResponse!.length &&
        visibleRimsAmount - 40 < rimsResponse!.length
      )
    ) {
      pageRef.current += 1;
      if (searchParams && carBrand && carModel && carYear && currPage) {
        const queryString = createQueryString({
          makerName: carBrand,
          modelName: carModel,
          year: carYear,
          page: pageRef.current,
          searchParamsString: searchParams.toString(),
        });
        router.replace(queryString, { scroll: false });
      } else if (searchParams && currPage) {
        const searchParamsString = new URLSearchParams(
          searchParams?.toString()
        );
        const queryString = searchParamsString.toString();
        router.replace(pathname + "?" + queryString, { scroll: false });
      }
      setVisibleRimsAmount((prev) => prev + 40);
    }
  };

  useEffect(() => {
    const getRimsByBrand = async () => {
      setLoading(true);
      setVisibleRimsAmount(40);
      const response = await rimsService.getRimsByBrand({
        rimBrand: getRimBrand((params!.params as string) || "all") || "all",
      });

      const { rims, diameters } = getPrepearedRimsData(response.data.message);
      if (diametersRef && diametersRef.current) {
        const newRimsList = getRimsDiameterFiltered({
          rims: rims || [],
          diameters: diametersRef.current.split("+"),
        });
        setRimsList((prev) => [...newRimsList]);
      } else {
        setRimsList((prev) => rims.slice(0, visibleRimsAmount));
      }
      setRimsResponse((prev) => rims);
      setRetrievedDiameters((prev) => diameters);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    const getFilteredRims = async () => {
      setLoading(true);
      setVisibleRimsAmount(40);
      const response = await rimsService.getFilteredRims({
        carBrand: carBrand || "",
        carModel: carModel || "",
        carYear: carYear || "",
        rimsBrand: rimsBrand,
      });

      const { rims, diameters } = getPrepearedRimsData(response.data.message);
      if (diametersRef && diametersRef.current) {
        const newRimsList = getRimsDiameterFiltered({
          rims: rims || [],
          diameters: diametersRef.current.split("+"),
        });
        setRimsList((prev) => [...newRimsList]);
      } else {
        setRimsList((prev) => rims.slice(0, visibleRimsAmount));
      }
      setRimsResponse((prev) => rims);
      setRetrievedDiameters((prev) => diameters);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };
    if (params!.params === "filter") {
      getFilteredRims();
    }
    if (params!.params !== "filter") {
      getRimsByBrand();
    }
  }, [params!.params as string, carBrand, carModel, carYear]);

  useEffect(() => {
    if (pageRef.current) {
      setVisibleRimsAmount(pageRef.current * 40);
      if (rimsResponse) {
        setLoading(true);
        setRimsList((prev) => rimsResponse!.slice(0, visibleRimsAmount));
        setLoading(false);
      }
    }
  }, [visibleRimsAmount, pageRef.current]);

  const FilterElement = useMemo(() => {
    return (
      <Filter
        rimBrand={rimsBrand}
        path={getRimBrand((params!.params as string) || "")}
        rimFilterParams={[carBrand, carModel, carYear]}
        avaliableDiameters={retrievedDiameters}
        checkedDiameters={rimsDiameter}
        setFilterDiameters={(value: string) => setDiametersHandler(value)}
      />
    );
  }, [carBrand, carModel, carYear, retrievedDiameters.length]);

  return (
    <StyledRimsFilter>
      {FilterElement}
      {!loading && rimsList && rimsList.length === 0 && (
        <Message>Data not found</Message>
      )}
      <Suspense fallback={null}>
        <CardContainer marginTop={16}>
          {loading &&
            Array.apply(null, Array(RIMS_CONTAINER_COUNT)).map(
              (item, index) => {
                return <ProductCardStub key={index} />;
              }
            )}

          {!loading &&
            rimsList &&
            rimsList.map((item) => {
              return <ProductCard key={item.rimId} parameters={item} />;
            })}
        </CardContainer>
      </Suspense>

      {!diametersRef.current &&
        rimsResponse &&
        !(
          visibleRimsAmount >= rimsResponse!.length &&
          visibleRimsAmount - 40 < rimsResponse!.length
        ) && (
          <ShowMoreBtnWrapper>
            <ShowMoreBtn clickHandler={showMoreHandler} />
          </ShowMoreBtnWrapper>
        )}
    </StyledRimsFilter>
  );
};

export default RimsFilter;
