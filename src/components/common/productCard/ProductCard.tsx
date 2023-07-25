import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import rim from "@images/delete-rim.jpg";

import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import { CardContent, StyledProductCard } from "./ProductCard.styles";
import { getDiameterLabel, getPriceLabel } from "@/utils/functions";
import { IRimObject } from "@/types/common.types";
import { AppRoutes } from "@/constants/common";
import { useRouter } from "next/navigation";

interface Props {
  parameters: IRimObject;
}

const ProductCard: FC<Props> = ({ parameters }) => {
  const { name, price, diameter, image, rimId } = parameters;
  const route = useRouter();
  const diameterLabel = getDiameterLabel(diameter);
  const priceLabel = getPriceLabel(price);
  const orderHandler = () => {
    route.push(AppRoutes.Rim + `/${rimId}`);
  };

  return (
    <StyledProductCard>
      <div>
        <Image src={image} width={236} height={236} alt={"rim"} />
      </div>

      <CardContent>
        <Link href={AppRoutes.Rim + `/${rimId}`}>{name}</Link>
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

        <BlueBtn
          color="dark"
          height="30"
          label={"Заказать"}
          clickHandler={orderHandler}
        />
      </CardContent>
    </StyledProductCard>
  );
};

export default ProductCard;
