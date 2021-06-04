import { DashboardOutlined, RadarChartOutlined, MonitorOutlined } from '@ant-design/icons';

import { defineProLayoutConfig } from '@/interface';

export default defineProLayoutConfig({
  appTitle: 'UmiJS Template',
  appLogo: '/app_logo.svg',
  sideMenus: [
    {
      key: 'dashboard',
      icon: DashboardOutlined,
      title: '仪表盘',
      children: [
        {
          icon: RadarChartOutlined,
          title: '分析',
          path: '/dashboard/analysis',
        },
        {
          icon: MonitorOutlined,
          title: '监控',
          path: '/dashboard/monitor',
        },
      ],
    },
  ],
  navMenus: [
    {
      key: 'dashboard',
      title: '仪表盘',
      children: [
        {
          title: '分析',
          path: '/dashboard/analysis',
        },
        {
          title: '监控',
          path: '/dashboard/monitor',
        },
      ],
    },
  ],
});
