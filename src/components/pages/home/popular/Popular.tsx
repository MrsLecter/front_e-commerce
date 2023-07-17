import { FC } from "react";

import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn/ShowMoreBtn";
import ProductCard from "@/components/common/productCard/ProductCard";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";

import { CardContainer, StyledPopular } from "./Popular.styles";

const Popular: FC = () => {
  const showAllRimsHandler = () => {
    alert("ShowAllRims");
  };
  return (
    <StyledPopular>
      <SectionHeader label={"Популярные модели"} />
      <CardContainer>
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
      </CardContainer>
      <ShowMoreBtn clickHandler={showAllRimsHandler} />
    </StyledPopular>
  );
};
export default Popular;
