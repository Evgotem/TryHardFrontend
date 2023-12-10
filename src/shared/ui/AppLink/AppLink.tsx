import {FC} from 'react';
import clsx from 'clsx';
import {Link, LinkProps} from "react-router-dom";
import s from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary', SECONDARY = 'secondary', RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
          className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
        } = props;

  return (<Link
    className={clsx(s.AppLink, s[theme], className)}
    to={to}
    {...otherProps}
  >
    {children}
  </Link>)
};
