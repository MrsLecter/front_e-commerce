import Image from "next/image";
import { FC } from "react";

import carBanner from "@images/auto-banner.png";

import {
  ContentContainer,
  StyledBanner,
  StyledBannerWrapper,
} from "./Banner.styles";
import { AppRoutes, FIRST_PAGE_PARAM } from "@/constants/common";
import { ManufacturesNames } from "@/constants/manufactures-card-list";
import Link from "next/link";

const Banner: FC = () => {
  return (
    <StyledBannerWrapper>
      <StyledBanner>
        <div>
          <Image
            src={carBanner}
            alt={"banner"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <ContentContainer>
          <p>Replica</p>
          <p>Копии оригинальных дисков теперь у нас на сайте</p>
          <Link
            href={AppRoutes.Rims + ManufacturesNames.Replica + FIRST_PAGE_PARAM}
          >
            Посмотреть все
          </Link>
        </ContentContainer>
      </StyledBanner>
    </StyledBannerWrapper>
  );
};

export default Banner;
