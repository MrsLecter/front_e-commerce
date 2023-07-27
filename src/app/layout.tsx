import "../styles/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { roboto, rubik } from "@/styles/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ukrdisk",
  description: "Диски на авто",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
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
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
      </Head>
      <body className={roboto.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="backdrop"></div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
