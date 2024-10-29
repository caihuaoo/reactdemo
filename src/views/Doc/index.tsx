import { Layout } from 'antd';
import styles from './index.module.less';

const Doc = () => {
  return (
    <Layout className={styles.layout}>
        <Layout className={styles.layout}>
            <div className={styles.content}>Doc</div>
        </Layout>
    </Layout>
  );
};

export default Doc;
