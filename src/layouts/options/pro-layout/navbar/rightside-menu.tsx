import React, { useMemo } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from 'umi';

import { pick } from '@/utils';

import { ILdapUser } from '@/interface';

import styles from './navbar.less';

export default function RightsideMenu() {
  const { initialState } = useModel('@@initialState');
  const { logout } = useModel('useLoginModel', model => pick(model, 'logout'));

  const menu = useMemo(
    () => (
      <Menu className={styles.profileMenu}>
        <Menu.Item
          key="profile"
          onClick={() => {
            history.push('/profile');
          }}
        >
          <UserOutlined />
          个人信息
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="logout"
          onClick={() => {
            logout();
          }}
        >
          <LogoutOutlined />
          注销
        </Menu.Item>
      </Menu>
    ),
    [logout]
  );

  return (
    <div className={styles.rightMenuArea}>
      <Dropdown overlay={menu}>
        <div className={styles.profile}>
          <Avatar src={(initialState as ILdapUser).avatar} />
          &nbsp;<span>{(initialState as ILdapUser).name}</span>
        </div>
      </Dropdown>
    </div>
  );
}
