import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { Text, TextAlign } from "@/shared/ui/Text";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";

import cls from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      {/* <div justify="center" max className={cls.avatarWrapper}>
              <Avatar size={200} src={article?.img} className={cls.avatar} />
          </div>
          <VStack gap="4" max data-testid="ArticleDetails.Info">
              <TextDeprecated
                  className={cls.title}
                  title={article?.title}
                  text={article?.subtitle}
                  size={TextSize.L}
              />
              <HStack gap="8" className={cls.articleInfo}>
                  <Icon className={cls.icon} Svg={EyeIcon} />
                  <TextDeprecated text={String(article?.views)} />
              </HStack>
              <HStack gap="8" className={cls.articleInfo}>
                  <Icon className={cls.icon} Svg={CalendarIcon} />
                  <TextDeprecated text={article?.createdAt} />
              </HStack>
          </VStack>
          {article?.blocks.map(renderArticleBlock)} */}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("Произошла ошибка при загрузке статьи.")}
      />
    );
  } else {
    content = <></>;
    // content = (
    //   <ToggleFeatures
    //     feature="isAppRedesigned"
    //     on={<Redesigned />}
    //     off={<Deprecated />}
    //   />
    // );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
