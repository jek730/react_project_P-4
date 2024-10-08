import { Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

// 마이 페이지
const Mypage = loadable(() => import('./routes/Mypage'));

// 뉴스 페이지
const News = loadable(() => import('./news/pages/News'));

// 식당 페이지
const Restaurant = loadable(() => import('./routes/Restaurant'));

// 예약 페이지
const Reservation = loadable(() => import('./routes/Reservation'));

// 게시판 페이지
const Board = loadable(() => import('./routes/Board'));

const routeUrlPaths = [
  'member',
  'mypage',
  'restaurant',
  'reservation',
  'board',
];

const App = () => {
  const location = useLocation();
  return routeUrlPaths.includes(location.pathname.split('/')[1]) ? (
    <>
      <Member />
      <Mypage />
      <Restaurant />
      <Reservation />
      <Board />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;