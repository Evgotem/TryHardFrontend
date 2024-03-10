import { FC } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({
  className = '',
}) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={clsx(className, s.ErrorPage)}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
