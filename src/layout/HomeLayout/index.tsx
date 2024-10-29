import { Layout } from 'antd';
import HeaderConent from './components/Header';
import styles from './index.module.less';
import { Outlet } from 'react-router-dom';

const { Header,Footer } = Layout;

const HomeLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <HeaderConent />
      </Header>
      <Layout className={styles.layout}>
        <Outlet />
      </Layout>
      <Footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          {'苏ICP备2024131188号'}
        </a>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
