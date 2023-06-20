import { useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }:SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed }, [className])}>
      Sidebar
    </div>
  )
}

export default Sidebar;