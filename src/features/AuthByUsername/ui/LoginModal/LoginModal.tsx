import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import cls from "./LoginModal.module.scss";
interface LoginFormProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginFormProps) => {
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginFormAsync />
    </Modal>
  );
};
