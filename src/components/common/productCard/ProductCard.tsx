import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import rim from "@images/delete-rim.jpg";

import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import { CardContent, StyledProductCard } from "./ProductCard.styles";

interface Props {
  name: string;
  price: number;
  diameter: number;
  href: string;
}

const ProductCard: FC<Props> = ({ name, price, diameter, href }) => {
  const orderHandler = () => {
    alert("order click");
  };

  return (
    <StyledProductCard>
      <div>
        <Image src={rim} width={236} height={236} alt={"rim"} />
      </div>

      <CardContent>
        <Link href={href}>{name}</Link>
        <p>от&nbsp;{price}&nbsp;грн</p>
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
