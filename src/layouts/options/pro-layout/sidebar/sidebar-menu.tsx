import React, { useState, useEffect, useMemo, useCallback } from 'react';

import { useModel, history, useLocation, useAccess } from 'umi';
import { Menu } from 'antd';

import { isNotEmptyArray, pick } from '@/utils';

import { ISideMenu, IERoute, IAccessState } from '@/interface';

interface ISideBarMenuProps {
  routes: IERoute[];
  sideMenus: ISideMenu[];
}

export default function SideBarMenu({ routes, sideMenus }: ISideBarMenuProps) {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { getMenuInfo } = useModel('useProLayoutModel', m => pick(m, 'getMenuInfo'));
  const accessState = useAccess();

  const { matchedFolders, matchedRoutePaths, menus } = useMemo(
    () => getMenuInfo(routes, sideMenus, accessState as IAccessState, location),
    [routes, sideMenus, accessState, location, getMenuInfo]
  );

  const renderMenus = useCallback((menus: ISideMenu[]) => {
    return menus.map(menu => {
      if (!isNotEmptyArray<ISideMenu[]>(menu.children)) {
        return (
          <Menu.Item key={menu.path}>
            {<menu.icon />}
            <span>{menu.title}</span>
          </Menu.Item>
        );
      }
      return (
        <Menu.SubMenu
          key={menu.key}
          title={
            <span>
              <menu.icon />
              <span>{menu.title}</span>
            </span>
          }
        >
          {renderMenus(menu.children)}
        </Menu.SubMenu>
      );
    });
  }, []);

  useEffect(() => {
    setOpenKeys(matchedFolders);
  }, [matchedFolders]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      selectedKeys={matchedRoutePaths}
      onSelect={({ item, key, keyPath, selectedKeys }) => {
        history.push(key);
      }}
      onOpenChange={e => {
        setOpenKeys(e as string[]);
      }}
    >
      {renderMenus(menus as ISideMenu[])}
    </Menu>
  );
}
