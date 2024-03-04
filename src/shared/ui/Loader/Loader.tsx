import { FC } from 'react';
import clsx from 'clsx';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({
  className = '',
}) => (
  <span className={clsx(className, 'loader')} />
);
