import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const MainPage = loadable(() => import('../mypage/pages/MypageMain'));

const Mypage = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Mypage);