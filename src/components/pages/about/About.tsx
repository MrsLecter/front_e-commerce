import Link from "next/link";
import { FC } from "react";

import ContentWrapper from "@/components/common/wrappers/ContentWrapper";
import { AppRoutes } from "@/constants/common";

import { AboutHeader, Paragraph } from "./About.styles";
import Location from "./elements/Location";

const About: FC = () => {
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
          <Link href={AppRoutes.Rims + "/kosei"}>Kosei aluminium (Япония)</Link>
          ,&nbsp;<Link href={AppRoutes.Rims + "/mkw"}>MKW (Mi-tech)</Link>,
          &nbsp;<Link href={AppRoutes.Rims + "/inzi"}>Marcello wheels</Link>,
          Zent и&nbsp;
          <Link href={AppRoutes.Rims + "/inzi"}>Inzi Aone (Корея)</Link>&nbsp;в
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
        <p>Закажите обратный звонок здесь</p>
        <p>Напишите нам прямо на сайте</p>
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
