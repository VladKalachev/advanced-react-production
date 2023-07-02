import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
 const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? "ru" : "en");
  }

  return (
      <Button
        className={classNames(cls.Navbar, {}, [className])}
        theme={ThemeButton.CLEAR} 
        onClick={toggle}
      >
        {t("Язык")}
      </Button>
  )
}