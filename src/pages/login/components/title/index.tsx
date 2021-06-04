import React from 'react';
import styles from './index.less';

export default function Title() {
  return (
    <div className={styles.titleHeader}>
      <div className={styles.appLogo}>
        <img src="/app_icon.jpeg" alt="applogo" />
      </div>
      <div className={styles.bar}></div>
      <div className={styles.appTitle}>umi 模版</div>
    </div>
  );
}
