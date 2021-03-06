import React, { useMemo, useCallback } from 'react';

import { useModel, history, useLocation, useAccess } from 'umi';
import { Menu } from 'antd';

import { isNotEmptyArray, pick } from '@/utils';

import { IERoute, IAccessState, INavMenu } from '@/interface';

import styles from './navbar.less';

interface ISideBarMenuProps {
  routes: IERoute[];
  navMenus: INavMenu[];
}

export default function NavMenu({ routes, navMenus }: ISideBarMenuProps) {
  const location = useLocation();
  const { getMenuInfo } = useModel('useProLayoutModel', m => pick(m, 'getMenuInfo'));
  const accessState = useAccess();

  const { menus, matchedRoutePaths } = useMemo(
    () => getMenuInfo(routes, navMenus, accessState as IAccessState, location),
    [routes, navMenus, accessState, location, getMenuInfo]
  );

  const renderMenus = useCallback((menus: INavMenu[]) => {
    return menus.map(menu => {
      if (!isNotEmptyArray<INavMenu[]>(menu.children)) {
        return (
          <Menu.Item key={menu.path}>
            <span>{menu.title}</span>
          </Menu.Item>
        );
      }
      return (
        <Menu.SubMenu
          key={menu.key}
          title={
            <span>
              <span>{menu.title}</span>
            </span>
          }
        >
          {renderMenus(menu.children)}
        </Menu.SubMenu>
      );
    });
  }, []);

  return (
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={matchedRoutePaths}
      onSelect={({ item, key, keyPath, selectedKeys }) => {
        history.push(key);
      }}
      className={styles.navMenus}
    >
      {renderMenus(menus)}
    </Menu>
  );
}
