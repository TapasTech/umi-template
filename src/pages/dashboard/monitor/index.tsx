import React from 'react';
import { IPageComponent, IPageComponentProps } from '@/interface';

const Monitor: IPageComponent = (props: IPageComponentProps) => {
  return <div>monitor</div>;
};

Monitor.title = 'MONITOR_TITLE';
Monitor.layout = 'PRO_LAYOUT';
Monitor.requireSignin = true;
Monitor.access = 'canReadDashboardMonitor';

export default Monitor;
