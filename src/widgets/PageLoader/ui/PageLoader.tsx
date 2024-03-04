import { FC } from 'react';
import clsx from 'clsx';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({
  className = '',
}) => (
  <div className={clsx(className, s.PageLoader)}>
    <Loader />
  </div>
);
