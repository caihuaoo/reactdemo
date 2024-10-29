//header

import { Button, Dropdown, MenuProps, Space } from 'antd';
import styles from './index.module.less';
import { useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import logo from '@/public/imgs/logo.svg';

import { useLocation, useNavigate } from 'react-router-dom';
import { handleCurrentRouter } from '@/utils/handleCurrentRouter';

const title = import.meta.env.VITE_SYSTEM_TITLE;

const menuList = [
  {
    key: 'Doc',
    name: '文档',
    path: '/Doc',
  },
  {
    key: 'Demo',
    name: '组件库',
    path: '/Demo',
  },
];

const HeaderConent = () => {
  const navigate = useNavigate();

  const location = useLocation();


  const currentSrcLocation = handleCurrentRouter(location.pathname);
  
  console.log('currentSrcLocation', currentSrcLocation);
  const theme = localStorage.getItem('theme') || 'light';
  const onClick = (theme) => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.setAttribute('theme', theme);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className={styles.light} onClick={() => onClick('light')}>
          Light
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className={styles.dark} onClick={() => onClick('dark')}>
          Dark
        </div>
      ),
    },
  ];

  const menuClick = (e) => {
    const { path } = e || {};
    navigate(path);
  };

  useEffect(() => {
    onClick(theme);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="" className={styles.logo} />
        <label className={styles.title} onClick={() => navigate('/')}>
          {title}
        </label>
      </div>
      <div className={styles.right}>
        {menuList.map((item) => (
          <div
            key={item.key}
            className={
              `${styles.link} ${currentSrcLocation === item.key && styles.active}`
            }
            onClick={() => menuClick(item)}
          >
            {item.name}
          </div>
        ))}
        <div className={styles.theme} id="theme">
          <Dropdown
            menu={{ items }}
            getPopupContainer={() => document.getElementById('theme')}
            overlayClassName={styles.dropdown}
            trigger={['click']}
          >
            <Button className={styles.button}>
              <Space>
                Theme
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default HeaderConent;
