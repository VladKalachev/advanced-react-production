import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';

import "./styles/index.scss";
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? "ru" : "en");
  }
  return (

    <div>
      <button onClick={toggle}>{t("Перевод")}</button>
      {t('Тестовый пример')}</div>
  )
}

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', { }, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <Component />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App