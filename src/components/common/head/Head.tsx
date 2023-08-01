import { FC } from "react";
import Head from "next/head";

const HeadComponent: FC = () => {
  return (
    <Head>
      <meta charSet="utf-8"></meta>
      <title>
        Ukrdisk | Компания ООО «Укрдиск» - легкосплавные, литые диски на авто
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        lang="ru"
        content="Ukrdisk интернет-магазин дисков  на автомобиль. Литые легкосплавные диски: доступная цена, удобный подбор, гарантия надежности. Доставка по Украине"
      />
      <meta property="og:title" content="Ukrdisk | Диски на авто." />
      <meta
        property="og:description"
        content="Ukrdisk интернет-магазин дисков  на автомобиль."
      />
      <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
  );
};

export default HeadComponent;
