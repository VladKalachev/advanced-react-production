import { useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "@/shared/ui/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button";

interface NavbarProps {
  className?: string;
}

// Навигация
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        consequatur excepturi ut amet quos odio placeat aliquid, temporibus
        facere tenetur molestias consequuntur optio veniam iusto veritatis iure.
        Praesentium, aliquid? Officiis!
      </Modal>
    </div>
  );
};
