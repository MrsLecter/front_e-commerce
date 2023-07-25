import Link from "next/link";
import { FC } from "react";

import ContentWrapper from "@/components/common/wrappers/ContentWrapper";
import { AppModals, AppRoutes } from "@/constants/common";

import { AboutHeader, Paragraph } from "./About.styles";
import Location from "./elements/Location";
import { ManufacturesNames } from "@/constants/manufactures-card-list";

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
          <Link href={AppRoutes.Rims + ManufacturesNames.Kosei}>Kosei aluminium (Япония)</Link>
          ,&nbsp;<Link href={AppRoutes.Rims + ManufacturesNames.Mkw}>MKW (Mi-tech)</Link>,
          &nbsp;<Link href={AppRoutes.Rims + ManufacturesNames.Marcello}>Marcello wheels</Link>
          , Zent и&nbsp;
          <Link href={AppRoutes.Rims + ManufacturesNames.Inzi}>Inzi Aone (Корея)</Link>&nbsp;в
          Украине.
        </p>
        <p>
          Наш ассортимент - легкосплавные, литые диски высокого качества,
          сертифицированные ISO, TUV, SAE, JWL и VIA.
        </p>
        <p>
          У нас на сайте вы можете легко подбрать диски на свое авто прямо{" "}
          <Link href={AppRoutes.Home}>здесь</Link>
        </p>
      </Paragraph>
      <AboutHeader>Как с нами связаться?</AboutHeader>
      <Paragraph>
        <p>
          Закажите обратный звонок&nbsp;
          <button onClick={orderCallClickHandler}>здесь</button>
        </p>
        <p>
          Напишите нам прямо на&nbsp;
          <button onClick={orderQuestionClickHandler}>сайте</button>
        </p>
        <p>Свяжитесь с нами напрямую:</p>
        <p>
          <a href="tel:+380503403726">+38 (050) 340-37-26</a>
        </p>
        <p>
          <a href="mailto:blokhvova@gmail.com">blokhvova@gmail.com</a>
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
