import { BugButton } from "@/app/providers/ErrorBoundary";
import { Counter } from "@/entities/Counter";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const [t] = useTranslation();

  return (
    <Page>
      {t("Главная страница")}
      <Counter />
    </Page>
  );
};

export default MainPage;
