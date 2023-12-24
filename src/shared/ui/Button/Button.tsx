import s from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";
import clsx from 'clsx';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
          className,
          children,
          theme,
          ...otherProps
        } = props;

  return (
    <button
      className={clsx(s.Button, {[s[theme]]: true})}
      {...otherProps}
    >
      {children}
    </button>
  );
};

