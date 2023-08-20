import { IRimObject } from "@/types/common.types";
import { getPrettyPrice, getUrlToRimPage } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  CardContent,
  GetOrderBtn,
  ProductName,
  StyledProductCard,
} from "./ProductCard.styles";

interface Props {
  parameters: IRimObject;
}

const ProductCard: FC<Props> = ({ parameters }) => {
  const { name, brand, price, diameters, image, rimId, config } = parameters;
  const diameterLabel = diameters ? diameters : [0];
  const priceLabel = price ? price[0] : 0;
  const urlToPage = getUrlToRimPage({
    rimId,
    brand,
    name,
    config: config[0],
  });
  return (
    <Link href={urlToPage}>
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
          <ProductName>{`${brand} - ${name}`}</ProductName>
          <p>от&nbsp;{getPrettyPrice(priceLabel)}&nbsp;грн</p>
          <p>
            {diameterLabel.length === 1 && (
              <span>&#8960;{diameterLabel[0]}&rsquo;&rsquo;</span>
            )}
            {diameterLabel.length > 1 && (
              <span>
                &#8960;{diameterLabel[0]}
                &rsquo;&rsquo;&nbsp;-&nbsp;&#8960;
                {diameterLabel[diameterLabel.length - 1]}
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
