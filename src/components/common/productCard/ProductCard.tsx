import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  CardContent,
  GetOrderBtn,
  ProductName,
  StyledProductCard,
} from "./ProductCard.styles";
import {
  getDiameterLabel,
  getPriceLabel,
  setSearchParamForRimPage,
} from "@/utils/functions";
import { IRimObject } from "@/types/common.types";
import { AppRoutes } from "@/constants/common";

interface Props {
  parameters: IRimObject;
}

const ProductCard: FC<Props> = ({ parameters }) => {
  const { name, price, diameter, image, rimId } = parameters;
  const diameterLabel = getDiameterLabel(diameter);
  const priceLabel = getPriceLabel(price);
  const searchParams = setSearchParamForRimPage(parameters);

  return (
    <Link href={AppRoutes.Rim + `/${rimId}?${searchParams}`}>
      <StyledProductCard loading={false}>
        <div>
          <Image
            src={image}
            width={236}
            height={200}
            alt={"rim"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <CardContent>
          <ProductName>{name}</ProductName>
          <p>от&nbsp;{priceLabel}&nbsp;грн</p>
          <p>
            {diameterLabel.length === 1 && (
              <span>&#8960;{diameterLabel[0]}&rsquo;&rsquo;</span>
            )}
            {diameterLabel.length > 1 && (
              <span>
                &#8960;{diameterLabel[0]}
                &rsquo;&rsquo;&nbsp;-&nbsp;&#8960;{diameterLabel[1]}
                &rsquo;&rsquo;
              </span>
            )}
          </p>
          <GetOrderBtn>Заказать</GetOrderBtn>
        </CardContent>
      </StyledProductCard>
    </Link>
  );
};

export default ProductCard;
