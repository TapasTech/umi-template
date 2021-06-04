import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';

import Base, { IExceptionView } from './base';

export default function Exception404({ style }: IExceptionView) {
  return (
    <Base
      img="/errors/404.png"
      title={404}
      description="对不起，您访问的页面不存在。"
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
