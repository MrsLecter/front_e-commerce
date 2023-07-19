import ProductCard from "@/components/common/productCard/ProductCard";
import ProductCardContainer from "@/components/common/productCardContainer/ProductCardContainer";
import { FC, useState } from "react";
import { ShowMoreBtnWrapper, StyledRimsFilter } from "./RimsFilter.styles";
import Filter from "./elements/filter/Filter";
import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";

const RimsFilter: FC = () => {
  const [filterParams, setFilterParams] = useState<string[]>(["545"]);
  const [diameter, setDiameter] = useState<string>("ddd");

  const filterProps = {
    rimBrand: "Marcello",
    setFilterParams,
    setDiameter,
  };

  const showMoreHandler = () => {
    alert("show more");
  };
  return (
    <StyledRimsFilter>
      <Filter {...filterProps} />
      <ProductCardContainer>
        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />
        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />

        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />
        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />

        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />
        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />

        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />
        <ProductCard
          name={"MKW - MK 61 Chrome"}
          price={4125}
          diameter={17}
          href={"/"}
        />
      </ProductCardContainer>
      <ShowMoreBtnWrapper>
        <ShowMoreBtn clickHandler={showMoreHandler} />
      </ShowMoreBtnWrapper>
    </StyledRimsFilter>
  );
};

export default RimsFilter;
