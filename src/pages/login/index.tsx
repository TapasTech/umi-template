import React, { useEffect } from 'react';
import { Tabs } from 'antd';

import { useModel, Redirect, useLocation } from 'umi';

import { isInvalidInitState, isNotEmpty, pick } from '@/utils';
import { IPageComponent, IPageComponentProps } from '@/interface';

import Title from './components/title';
import AccountPane from './components/account-pane';

import styles from './index.less';

const Login: IPageComponent = (props: IPageComponentProps) => {
  const { initialState } = useModel('@@initialState');
  const { initBackground } = useModel('useLoginModel', m => pick(m, 'initBackground'));
  // @ts-ignore
  const { query } = useLocation();

  useEffect(() => {
    initBackground();
  }, [initBackground]);

  if (isNotEmpty<string>(initialState) && !isInvalidInitState(initialState)) {
    // @ts-ignore
    if (query.redirectTo) {
      return <Redirect to={{ pathname: query.redirectTo }} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <>
      <div id="bg-animate" className={styles.bgContainer}></div>
      <div className={styles.loginContainer}>
        <Title />
        <Tabs defaultActiveKey="accountway" className={styles.signinContainer}>
          <Tabs.TabPane tab="账号密码登录" key="accountway" className={styles.signinInnerContainer}>
            <AccountPane />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

Login.title = 'LOGIN_TITLE';
Login.layout = 'BLANK';
Login.requireSignin = false;

export default Login;
