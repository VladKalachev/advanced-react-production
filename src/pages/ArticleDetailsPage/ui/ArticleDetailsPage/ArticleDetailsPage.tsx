import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const [t] = useTranslation("article");
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};
