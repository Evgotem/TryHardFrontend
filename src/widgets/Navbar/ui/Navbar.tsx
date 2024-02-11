import { FC } from 'react';
import clsx from 'clsx';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={clsx(className, s.Navbar)}>
    <div className={s.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
    </div>
  </div>
);
