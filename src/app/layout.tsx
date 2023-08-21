"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { setupStore } from "@/store";
import { roboto } from "@/styles/fonts";
import { Provider } from "react-redux";
import "../styles/globals.css";

const store = setupStore();

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
