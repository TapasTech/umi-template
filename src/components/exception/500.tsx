import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';

import Base, { IExceptionView } from './base';

export default function Exception500({ style }: IExceptionView) {
  return (
    <Base
      img="/errors/500.png"
      title={500}
      description="对不起，服务器出错了！"
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
