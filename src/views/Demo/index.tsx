import { RootState } from '@/store';
import { getComponent } from '@/utils/asyncComponent';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Drawer, Button } from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.module.less';
import SliderContent from './SliderContent';
import { MenuFoldOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const Demo = () => {
  const { currentComponent } = useSelector((state: RootState) => state.global);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const Component = getComponent(currentComponent?.name);

  return (
    <Layout className={styles.layout}>
      <Sider
        width="15%"
        className={`${styles.sidzhuer} ${
          isDrawerVisible ? styles.drawer_open : styles.drawer_close
        }`}
      >
        <SliderContent />
      </Sider>
      <MenuFoldOutlined
        className={styles.menuFoldOutlined}
        onClick={() => setIsDrawerVisible(!isDrawerVisible)}
      />
      <Content className={styles.content}>{Component && <Component />}</Content>
    </Layout>
  );
};

export default Demo;
