import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getArticlesPageError } from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";
import { Text } from "@/shared/ui/Text";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const [t] = useTranslation("article");
  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <Text text={t("Ошибка при загрузке статей")} />;
  }

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList articles={articles} />
    </div>
  );
};

export default memo(ArticlesPage);
