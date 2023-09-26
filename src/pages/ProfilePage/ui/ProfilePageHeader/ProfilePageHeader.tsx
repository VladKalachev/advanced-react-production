import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeader {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Профиль")} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
    </div>
  );
};
