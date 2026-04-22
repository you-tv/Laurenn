import { Outlet } from "react-router";
import { Chatbot } from "./chatbot";
import { LanguageProvider } from "../i18n/language-context";

export function Layout() {
  return (
    <LanguageProvider>
      <Outlet />
      <Chatbot />
    </LanguageProvider>
  );
}