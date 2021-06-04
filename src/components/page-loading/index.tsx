import React from 'react';
import { Spin } from 'antd';
import type { SpinProps } from 'antd';

const PageLoading: React.FC<SpinProps & any> = ({ isLoading, pastDelay, timedOut, error, retry, ...reset }) => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" {...reset} />
  </div>
);
// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default PageLoading;
