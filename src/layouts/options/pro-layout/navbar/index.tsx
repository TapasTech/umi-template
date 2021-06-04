import React from 'react';
import { Layout } from 'antd';

import { IERoute } from '@/interface';

import { MenuFoldButton } from '@/components';

import proLayoutConfig from '../pro-layout-config';

import RightsideMenu from './rightside-menu';
import NavMenu from './nav-menu';

import styles from './navbar.less';

interface INavigationbarProps {
  routes: IERoute[];
  sidebarCollapsed: boolean;
  onToggleSidebar: (e: React.MouseEvent<HTMLElement>) => void;
  appLogo: string;
  appTitle: string;
}

function Logo({ appLogo }: { appLogo: string }) {
  return (
    <div className={styles.logoArea}>
      <a href="/" className={styles.logo}>
        <img src={appLogo} alt="logo" />
      </a>
    </div>
  );
}

export default function Navbar({ routes, sidebarCollapsed, onToggleSidebar, appLogo, appTitle }: INavigationbarProps) {
  return (
    <Layout.Header className={styles.navigationBar}>
      {!proLayoutConfig.sideMenus && <Logo appLogo={appLogo} />}
      {!proLayoutConfig.sideMenus && <h1>{appTitle}</h1>}
      {proLayoutConfig.sideMenus && <MenuFoldButton collapsed={sidebarCollapsed} onToggle={onToggleSidebar} />}
      {proLayoutConfig.navMenus && <NavMenu routes={routes} navMenus={proLayoutConfig.navMenus} />}
      <RightsideMenu />
    </Layout.Header>
  );
}
