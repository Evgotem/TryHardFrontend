import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Suspense} from 'react';

export const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Главная</Link>f
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy/>}/>
          <Route path={'/'} element={<MainPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
