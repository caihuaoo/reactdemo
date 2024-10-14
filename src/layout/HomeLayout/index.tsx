import { ElementType, Suspense } from "react";
import { Layout } from "antd";
import HeaderConent from "../../componets/Header";
import SliderContent from "../../componets/SliderContent";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./index.module.less";
import Loading from "../../componets/Loading";
import { getComponent } from "@/utils/asyncComponent";

const { Header, Footer, Sider, Content } = Layout;

const HomeLayout = () => {
  const { currentComponent } = useSelector((state: RootState) => state.global);

  const Component = getComponent(currentComponent?.path)

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
          {currentComponent?.path && (
            <Suspense fallback={<Loading />}>
              {Component && <Component />}
            </Suspense>
          )}
        </Content>
      </Layout>
      <Footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          {"苏ICP备2024131188号"}
        </a>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
