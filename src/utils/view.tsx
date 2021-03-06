import React from 'react';
import { Input, Button } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import classnames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';

import { clearAll } from '@/utils';

export function destoryGlobalSpinner() {
  const splash = document.querySelector('#splash-spinner');
  const spinner = document.querySelector('.spinner');
  if (splash) {
    document.head.removeChild(splash);
  }
  if (spinner && spinner.parentNode) {
    spinner.parentNode.removeChild(spinner);
  }
}

export function redirectToLogin(needRedirectBack: boolean) {
  clearAll();
  const { location } = window;
  if (location.pathname === '/login' || !needRedirectBack) {
    location.href = '/login';
    return;
  }
  location.href = `/login?redirectTo=${location.pathname}`;
}

export function getColumnSearchProps(searchPlaceholder: string) {
  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
      <div style={{ padding: 80 }}>
        <Input
          placeholder={searchPlaceholder}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90, marginRight: 8 }}>
          搜索
        </Button>
        <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
          重置
        </Button>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined className={classnames({ filteredColor: filtered })} />,
  };
}
