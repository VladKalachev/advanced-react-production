import { Modal } from "@/shared/ui/Modal";
import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
};
