import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile";
import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

interface ProfilePageHeader {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack justify="between" className={classNames("", {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                {t("Отменить")}
              </Button>
              <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
