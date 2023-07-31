import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import placeholder from "@images/rim-placeholder.png";

import BlueBtn from "../buttons/BlueBtn/BlueBtn";
import {
  CardContent,
  LoadingDiameters,
  LoadingName,
  LoadingPrice,
  StyledProductCard,
} from "./ProductCard.styles";
import { getDiameterLabel, getPriceLabel } from "@/utils/functions";
import { IRimObject } from "@/types/common.types";
import { AppRoutes } from "@/constants/common";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@/styles/common";

interface Props {
  parameters: IRimObject;
  loading: boolean;
}

const ProductCard: FC<Props> = ({ parameters, loading }) => {
  const { name, price, diameter, image, rimId } = parameters;
  const route = useRouter();
  const diameterLabel = getDiameterLabel(diameter);
  const priceLabel = getPriceLabel(price);
  const orderHandler = () => {
    route.push(AppRoutes.Rim + `/${rimId}`);
  };

  return (
    <StyledProductCard loading={loading}>
      <div>
        {loading && (
          <Image src={placeholder} width={236} height={236} alt={"rim"} />
        )}
        {!loading && <Image src={image} width={236} height={236} alt={"rim"} />}
      </div>

      <CardContent>
        {!loading && (
          <Link tabIndex={-1} href={AppRoutes.Rim + `/${rimId}`}>
            {name}
          </Link>
        )}
        {loading && (
          <a>
            <LoadingName />
          </a>
        )}
        {!loading && <p>от&nbsp;{priceLabel}&nbsp;грн</p>}
        {loading && <LoadingPrice />}
        {!loading && (
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
        )}
        {loading && <LoadingDiameters />}
        {!loading && (
          <BlueBtn
            color="dark"
            height="32"
            label={"Заказать"}
            clickHandler={orderHandler}
          />
        )}
        {loading && <LoadingButton height={30} />}
      </CardContent>
    </StyledProductCard>
  );
};

export default ProductCard;
