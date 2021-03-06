import React from 'react';
import { Layout } from 'antd';

import { IERoute, ISideMenu } from '@/interface';

import SidebarTitle from './sidebar-title';
import SidebarMenu from './sidebar-menu';

interface ISidebarProps {
  sidebarCollapsed: boolean;
  routes: IERoute[];
  sideMenus: ISideMenu[];
  appLogo: string;
  appTitle: string;
}

export default function Sidebar({ sidebarCollapsed, routes, sideMenus, appLogo, appTitle }: ISidebarProps) {
  return (
    <Layout.Sider theme="dark" width={260} trigger={null} collapsible collapsed={sidebarCollapsed}>
      <SidebarTitle collapsed={sidebarCollapsed} appLogo={appLogo} appTitle={appTitle} />
      <SidebarMenu routes={routes!} sideMenus={sideMenus} />
    </Layout.Sider>
  );
}
