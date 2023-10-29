import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";
import { Text } from "@/shared/ui/Text";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleView } from "@/entities/Article";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const [t] = useTranslation("article");
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const dispatch = useAppDispatch();

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList({ replace: true }));
  });

  if (error) {
    return <Text text={t("Ошибка при загрузке статей")} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={className}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
