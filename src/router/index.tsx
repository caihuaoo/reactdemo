// Router.tsx
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeLayout from '@/layout/HomeLayout';
import { getHomeRouters } from '@/utils/asyncComponent';

const Router = () => {
  const list = getHomeRouters() || [];

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* 
           默认路由，重定向到 Home 
           注意： 这里的 index 路由，必须放在最前面，否则会匹配不到
        */}
        <Route index element={<Navigate to="Home" replace />} />
        {list.map((item) => (
          <Route
            key={item.name}
            path={item.name}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <item.component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
