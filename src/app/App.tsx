import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';

import "./styles/index.scss";
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', { }, [theme])}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  )
}

export default App