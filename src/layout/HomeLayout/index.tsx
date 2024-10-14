import { ElementType, Suspense } from 'react';
import { Layout } from 'antd';
import HeaderConent from './components/Header';
import SliderContent from './components/SliderContent';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './index.module.less';
import Loading from '../../components/Loading';
import { getComponent } from '@/utils/asyncComponent';

const { Header, Footer, Sider, Content } = Layout;

const HomeLayout = () => {
  const { currentComponent } = useSelector((state: RootState) => state.global);

  const Component = getComponent(currentComponent?.name);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <HeaderConent />
      </Header>
      <Layout>
        <Sider width="15%" className={styles.sider}>
          <SliderContent />
        </Sider>
        <Content className={styles.content}>
          {Component && <Component />}
        </Content>
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
