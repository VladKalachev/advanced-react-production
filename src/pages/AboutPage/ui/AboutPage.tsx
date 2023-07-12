import { useTranslation } from "react-i18next";

// О сайте
const AboutPage = () => {
  const [t] = useTranslation("about");

  return <div>{t("О сайте")}</div>;
};

export default AboutPage;
