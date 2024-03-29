import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleView } from "../../model/consts/articleConsts";
import { Article } from "../../model/types/article";

import { ArticleListItemDeprecated } from "./ArticleListItemDeprecated/ArticleListItemDeprecated";

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  return <ArticleListItemDeprecated {...props} />;
});
