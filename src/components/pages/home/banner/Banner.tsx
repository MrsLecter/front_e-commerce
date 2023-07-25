import Image from "next/image";
import { FC } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import carBanner from "@images/auto-banner.png";

import {
  ContentContainer,
  StyledBanner,
  StyledBannerWrapper,
} from "./Banner.styles";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/common";
import { ManufacturesNames } from "@/constants/manufactures-card-list";

const Banner: FC = () => {
  const router = useRouter();
  const showAllReplica = () => {
    router.push(AppRoutes.Rims + ManufacturesNames.Replica);
  };
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
          <BlueBtn
            label={"Посмотреть все"}
            color={"light"}
            clickHandler={showAllReplica}
            height={"36"}
          />
        </ContentContainer>
      </StyledBanner>
    </StyledBannerWrapper>
  );
};

export default Banner;
