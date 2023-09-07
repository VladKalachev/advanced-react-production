import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";
import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <input type="text" className={cls.input} />
      <input type="text" className={cls.input} />
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
