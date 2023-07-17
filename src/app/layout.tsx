import "../styles/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { roboto, rubik } from "@/styles/fonts";

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
      <body className={roboto.variable}>
        <div id="backdrop"></div>
        <div id="modal"></div>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
