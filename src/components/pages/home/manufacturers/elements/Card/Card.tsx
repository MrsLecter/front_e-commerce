import Image from "next/image";
import { FC } from "react";

import { ImageWrapper, LogoWrapper, StyledCard } from "./Card.styles";
import { AppRoutes, FIRST_PAGE_PARAM } from "@/constants/common";
import { setSearchParamForManufacturerFiltering } from "@/utils/functions";
import Link from "next/link";

interface Props {
  id: number;
  logo: string;
  rim: string;
  href: string;
}

const Card: FC<Props> = (props) => {
  const searchParams = setSearchParamForManufacturerFiltering(props.href);
  const manufacturersLink = `${AppRoutes.Rims}${props.href}?${searchParams}`;

  return (
    <Link href={manufacturersLink}>
      <StyledCard>
        <LogoWrapper>
          <div>
            <Image src={props.logo} alt={"logo.png"} width={130} height={28} />
          </div>
          <div>Посмотреть все</div>
        </LogoWrapper>

        <ImageWrapper>
          <Image src={props.rim} alt={"rim.png"} width={184} height={152} />
        </ImageWrapper>
      </StyledCard>
    </Link>
  );
};

export default Card;
