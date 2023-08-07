import "../styles/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { roboto } from "@/styles/fonts";

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
    <html lang="ru">
      <body className={roboto.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="backdrop"></div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
