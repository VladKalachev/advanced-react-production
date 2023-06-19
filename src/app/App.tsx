import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', { }, [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App