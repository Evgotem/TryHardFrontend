import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={clsx(className, s.Button, { [s[theme]]: true })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
