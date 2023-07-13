import ProductCard from "@/components/common/productCard/ProductCard";
import { FC } from "react";
import { CardContainer, StyledPopular } from "./Popular.styles";
import SectionHeader from "@/components/common/sectionHeader/SectionHeader";
import ShowMoreBtn from "@/components/common/buttons/ShowMoreBtn";

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
