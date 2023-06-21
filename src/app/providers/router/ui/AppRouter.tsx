import { Suspense } from 'react'
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (
        <Route 
          key={path}
          path={path}
          element={<div className='page-wrapper'>{element}</div>}
          />
      ))}
    </Routes>
  </Suspense>
  )
}

export default AppRouter;