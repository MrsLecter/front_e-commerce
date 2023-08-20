import { FC } from "react";

import ContentWrapper from "@/components/common/wrappers/ContentWrapper";
import { AppModals, AppRoutes } from "@/constants/common";

import { ManufacturesNames } from "@/constants/manufactures-card-list";
import { setSearchParamForManufacturerFiltering } from "@/utils/functions";
import { AboutHeader, ContactLink, Paragraph } from "./About.styles";
import BlueLink from "./elements/BlueLink";
import Location from "./elements/Location";

interface Props {
  modalHandler: (modalID: number) => void;
}

const About: FC<Props> = ({ modalHandler }) => {
  const orderCallClickHandler = () => {
    modalHandler(AppModals.Call);
  };

  const orderQuestionClickHandler = () => {
    modalHandler(AppModals.Question);
  };

  const getFormedUrl = (manufacturer: string) => {
    return `${
      AppRoutes.Rims
    }${manufacturer}?${setSearchParamForManufacturerFiltering(manufacturer)}`;
  };

  return (
    <ContentWrapper>
      <AboutHeader>O нас</AboutHeader>
      <Paragraph>
        <p>Наша компания основана 24 февраля 2004 года в г. Днепр.</p>
        <p>
          Мы занимаемся поставкой и продажами легкосплавных колесных дисков и
          комплектующим к ним.
        </p>
        <p>
          За время работы мы стали эксклюзивным представителем компаний &nbsp;
          <BlueLink
            label={"Kosei aluminium (Япония)"}
            link={getFormedUrl(ManufacturesNames.Kosei)}
          />
          ,&nbsp;
          <BlueLink
            label={"MKW (Mi-tech)"}
            link={getFormedUrl(ManufacturesNames.Mkw)}
          />
          , &nbsp;
          <BlueLink
            label={"Marcello wheels"}
            link={getFormedUrl(ManufacturesNames.Marcello)}
          />
          , Zent и&nbsp;
          <BlueLink
            label={"Inzi Aone (Корея)"}
            link={getFormedUrl(ManufacturesNames.Inzi)}
          />
          &nbsp;в Украине.
        </p>
        <p>
          Наш ассортимент - легкосплавные, литые диски высокого качества,
          сертифицированные ISO, TUV, SAE, JWL и VIA.
        </p>
        <p>
          У нас на сайте вы можете легко подбрать диски на свое авто прямо{" "}
          <BlueLink label={"здесь"} link={AppRoutes.Home} />
        </p>
      </Paragraph>
      <AboutHeader>Как с нами связаться?</AboutHeader>
      <Paragraph>
        <p>
          Закажите обратный звонок&nbsp;
          <button onClick={orderCallClickHandler}>здесь</button>
        </p>
        <p>
          Напишите нам прямо &nbsp;
          <button onClick={orderQuestionClickHandler}>на сайте</button>
        </p>
        <p>Свяжитесь с нами напрямую:</p>
        <p>
          <ContactLink href={"mailto:blokhvova@gmail.com"}>
            +38 (050) 340 37 26
          </ContactLink>
        </p>
        <p>
          <ContactLink href={"mailto:blokhvova@gmail.com"}>
            blokhvova@gmail.com
          </ContactLink>
        </p>
      </Paragraph>
      <AboutHeader>Где мы находимся?</AboutHeader>
      <Paragraph>
        <p>Днепр, Запорожское Шоссе 26</p>
        <Location />
      </Paragraph>
    </ContentWrapper>
  );
};

export default About;
