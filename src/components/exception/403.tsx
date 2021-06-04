import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';

import Base, { IExceptionView } from './base';

export default function Exception403({ style }: IExceptionView) {
  return (
    <Base
      img="/errors/403.png"
      title={403}
      description="对不起，您没有权限访问当前页面。"
      style={style}
      action={
        <Button
          type="primary"
          onClick={() => {
            history.push('/');
          }}
        >
          回到首页
        </Button>
      }
    />
  );
}
