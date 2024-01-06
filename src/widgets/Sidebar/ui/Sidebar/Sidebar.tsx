import { FC, useState } from 'react';
import clsx from 'clsx';
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({
    className,
}) => {

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
      setCollapsed(prev => !prev)
  }

  return (
    <div className={clsx(className, s.Sidebar, {[s.collapsed]: collapsed})}>
      <button onClick={onToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};
