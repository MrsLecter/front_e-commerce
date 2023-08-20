import Image from "next/image";
import { FC } from "react";

import carBanner from "@images/auto-banner.png";

import { AppRoutes } from "@/constants/common";
import { ManufacturesNames } from "@/constants/manufactures-card-list";
import { setSearchParamForManufacturerFiltering } from "@/utils/functions";
import Link from "next/link";
import {
  BannerLink,
  ContentContainer,
  StyledBanner,
  StyledBannerWrapper,
} from "./Banner.styles";

const Banner: FC = () => {
  const bannerParams = setSearchParamForManufacturerFiltering(
    ManufacturesNames.Replica
  );
  const bannerLink = `${AppRoutes.Rims}${ManufacturesNames.Replica}?${bannerParams}`;
  return (
    <Link href={bannerLink}>
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
            <BannerLink>Посмотреть все</BannerLink>
          </ContentContainer>
        </StyledBanner>
      </StyledBannerWrapper>
    </Link>
  );
};

export default Banner;
