import { memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "@/shared/ui/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { userActions } from "@/entities/User";
import { TextTheme, Text } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { getRouteArticleCreate } from "@/shared/const/router";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";

interface NavbarProps {
  className?: string;
}

// Навигация
export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout);
  }, [dispatch]);

  const mainClass = cls.Navbar;

  if (!authData) {
    return (
      <header className={classNames(mainClass, {}, [className])}>
        <Text
          className={cls.appName}
          title={t("Ulbi TV App")}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t("Создать статью")}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          {/* <NotificationButton /> */}
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Text
        className={cls.appName}
        title={t("My App")}
        theme={TextTheme.INVERTED}
      />
      <AppLink
        to={"/articles/new"}
        theme={AppLinkTheme.SECONDARY}
        className={cls.createBtn}
      >
        {t("Создать статью")}
      </AppLink>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
});
