import { RootState } from '@/store';
import { getComponent } from '@/utils/asyncComponent';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import styles from './index.module.less';
import SliderContent from './SliderContent';

const { Sider, Content } = Layout;

const Demo = () => {
  const { currentComponent } = useSelector((state: RootState) => state.global);

  const Component = getComponent(currentComponent?.name);

  return (
    <Layout className={styles.layout}>
      <Sider width="15%" className={styles.sider}>
        <SliderContent />
      </Sider>
      <Content className={styles.content}>{Component && <Component />}</Content>
    </Layout>
  );
};

export default Demo;
