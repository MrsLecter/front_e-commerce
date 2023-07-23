import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import rim from "@images/delete-rim.jpg";

import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import { CardContent, StyledProductCard } from "./ProductCard.styles";
import { getPrettyPrice } from "@/utils/functions";
import { IRimObject } from "@/types/common.types";
import { AppRoutes } from "@/constants/common";
import { useRouter } from "next/navigation";

interface Props {
  parameters: IRimObject;
}

const ProductCard: FC<Props> = ({ parameters }) => {
  const { name, price, diameter, image, rimId } = parameters;
  const route = useRouter();
  const orderHandler = () => {
    route.push(AppRoutes.Rim + `/${rimId}`);
  };

  return (
    <StyledProductCard>
      <div>
        <Image src={rim} width={236} height={236} alt={"rim"} />
      </div>

      <CardContent>
        <Link href={AppRoutes.Rim + `/${rimId}`}>{name}</Link>
        <p>от&nbsp;{getPrettyPrice(price)}&nbsp;грн</p>
        <p>&#8960;{diameter}</p>

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
