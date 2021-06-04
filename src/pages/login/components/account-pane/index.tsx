import React from 'react';
import { Form, Button, Input, Checkbox, Tooltip } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useModel } from 'umi';
import { pick } from '@/utils';

import styles from './index.less';

export default function AccountPane() {
  const { isRememberme, toggleRememberme, login } = useModel('useLoginModel', m =>
    pick(m, 'isRememberme', 'toggleRememberme', 'login')
  );

  return (
    <Form
      name="account_login"
      initialValues={{ remember: isRememberme }}
      onFinish={vals => {
        login(vals.account, vals.password);
      }}
    >
      <Form.Item name="account" rules={[{ required: true, message: '请填写账号!' }]}>
        <Input prefix={<UserOutlined />} placeholder="账号：admin 或者 meimei.han" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请填写密码' }]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="密码：123456" />
      </Form.Item>
      <Form.Item className={styles.rememberContainer}>
        <Checkbox onChange={toggleRememberme}>记住我</Checkbox>

        <Tooltip title="功能未实现">
          <span className={styles.forgetPwd}>忘记密码</span>
        </Tooltip>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.signinBtn}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}
