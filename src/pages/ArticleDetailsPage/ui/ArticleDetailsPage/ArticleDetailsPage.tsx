import { ArticleDetails } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo } from "react";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { useParams } from "react-router-dom";
import { articleDetailsPageReducer } from "../../model/slices";
import cls from "./ArticleDetailsPage.module.scss";

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack";
import { Card } from "@/shared/ui/Card";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Card>{t("Оценка статей скоро появится!")}</Card>
          <ArticleDetailsComments id={id} />
        </VStack>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
