import { Roboto, Rubik } from "next/font/google";

export const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500"],
  style: "normal",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  display: "swap",
});

export const roboto = Roboto({
  variable: "--font-roboto",
  style: "normal",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});
