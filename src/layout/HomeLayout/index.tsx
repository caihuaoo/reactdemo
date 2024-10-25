import { Layout } from 'antd';
import HeaderConent from './components/Header';
import styles from './index.module.less';
import { Outlet } from 'react-router-dom';

const { Header } = Layout;

const HomeLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <HeaderConent />
      </Header>
      <Layout className={styles.layout}>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
