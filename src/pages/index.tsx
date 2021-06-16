import React from 'react';
import styles from './index.less';

function Home() {
  return <div className={styles.home}>Home</div>;
}

Home.requireSignin = false;
Home.layout = 'BLANK';

export default Home;
