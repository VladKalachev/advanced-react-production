import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

// О сайте
const AboutPage = () => {
  const [t] = useTranslation("about");

  return <Page>{t("О сайте")}</Page>;
};

export default AboutPage;
