import { classNames } from '@/shared/lib/classNames/classNames';
import {FC, ReactNode} from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {

  return (
    <Link 
      to={to} 
      className={classNames(cls.AppLink, { }, [className, cls[theme]])}
      {...otherProps}
      >
      {children}
    </Link>
  )
}