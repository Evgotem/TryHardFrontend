import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import clsx from 'clsx';
import s from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className= '',
}) => {
  const {t, i18n} = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        className={clsx(className, s.LangSwitcher)}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
  );
};
