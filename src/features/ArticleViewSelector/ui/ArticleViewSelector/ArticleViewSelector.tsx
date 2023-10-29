import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import ListIconDeprecated from "@/shared/assets/icons/list-24-24.svg";
import TiledIconDeprecated from "@/shared/assets/icons/tiled-24-24.svg";

import ListIcon from "@/shared/assets/icons/burger.svg";
import TiledIcon from "@/shared/assets/icons/tile.svg";

import { Icon as IconDeprecated } from "@/shared/ui/Icon";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/Button";
import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "@/entities/Article";

import { Icon } from "@/shared/ui/Icon";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/Stack";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIconDeprecated,
  },
  {
    view: ArticleView.BIG,
    icon: ListIconDeprecated,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <ButtonDeprecated
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <IconDeprecated
            width={24}
            height={24}
            Svg={viewType.icon}
            className={classNames("", {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </ButtonDeprecated>
      ))}
    </div>
  );
});
