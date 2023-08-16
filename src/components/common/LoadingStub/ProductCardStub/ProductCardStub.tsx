import { LoadingButton } from "@/styles/common";
import placeholder from "@images/rim-placeholder.png";
import Image from "next/image";
import { FC } from "react";
import {
  CardContent,
  StyledProductCard,
} from "../../productCard/ProductCard.styles";
import {
  LoadingDiameters,
  LoadingName,
  LoadingPrice,
} from "./ProductCardStub.styles";

const ProductCardStub: FC = () => {
  return (
    <StyledProductCard loading={true}>
      <div>
        <Image src={placeholder} width={236} height={236} alt={"rim"} />
      </div>
      <CardContent>
        <a>
          <LoadingName />
        </a>
        <LoadingPrice />
        <LoadingDiameters />
        <LoadingButton height={30} />
      </CardContent>
    </StyledProductCard>
  );
};

export default ProductCardStub;
