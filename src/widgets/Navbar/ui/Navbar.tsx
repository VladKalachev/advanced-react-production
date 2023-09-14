import { useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "@/shared/ui/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { userActions } from "@/entities/User";

interface NavbarProps {
  className?: string;
}

// Навигация
export const Navbar = ({ className }: NavbarProps) => {
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

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
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
};
