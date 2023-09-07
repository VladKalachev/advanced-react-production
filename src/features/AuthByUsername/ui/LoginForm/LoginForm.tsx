import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("Введите username")}
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t("Войти")}
      </Button>
    </div>
  );
});

export default LoginForm;
