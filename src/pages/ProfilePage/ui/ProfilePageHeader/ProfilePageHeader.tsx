import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeader {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          onClick={onEdit}
          theme={ButtonTheme.OUTLINE}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            onClick={onCancelEdit}
            theme={ButtonTheme.OUTLINE_RED}
          >
            {t("Отменить")}
          </Button>
          <Button
            className={cls.saveBtn}
            onClick={onSave}
            theme={ButtonTheme.OUTLINE}
          >
            {t("Сохранить")}
          </Button>
        </>
      )}
    </div>
  );
};
