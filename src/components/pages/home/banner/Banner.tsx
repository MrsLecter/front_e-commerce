import BlueBtn from "@/components/common/buttons/BlueBtn";
import { FC } from "react";
import carBanner from "@images/auto-banner.png";
import Image from "next/image";
import {
  StyledBanner,
  StyledBannerWrapper,
  ContentContainer,
} from "./Banner.styles";

const Banner: FC = () => {
  const showAllReplica = () => {
    alert("show replica stub");
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
          <p>Копии оригинальных дисков у нас на сайте</p>
          <BlueBtn
            label={"Посмотреть все"}
            color={"light"}
            clickHandler={showAllReplica}
          />
        </ContentContainer>
      </StyledBanner>
    </StyledBannerWrapper>
  );
};

export default Banner;
