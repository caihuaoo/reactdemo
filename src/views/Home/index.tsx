import { Layout } from 'antd';
import styles from './index.module.less';

const Home = () => {
  return (
    <Layout className={styles.layout}>
        <Layout className={styles.layout}>
            <div className={styles.content}>Home</div>
        </Layout>
    </Layout>
  );
};

export default Home;
