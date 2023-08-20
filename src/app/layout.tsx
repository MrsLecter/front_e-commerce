"use client";
import "../styles/globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { roboto } from "@/styles/fonts";
import { Provider } from "react-redux";
import { setupStore } from "@/store";

const store = setupStore();

// export const metadata: Metadata = {
//   title: "Ukrdisk",
//   description: "Диски на авто",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.variable}>
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
        <div id="backdrop"></div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
