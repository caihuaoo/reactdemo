import { Layout } from 'antd';
import styles from './index.module.less';

const { Footer } = Layout;


const Home = () => {
  return (
    <Layout className={styles.layout}>
        <Layout className={styles.layout}>
            <div className={styles.content}>Home</div>
        </Layout>
      <Footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          {'苏ICP备2024131188号'}
        </a>
      </Footer>
    </Layout>
  );
};

export default Home;
