import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import { lazy } from 'react';
import { Sample } from 'views/pages/sample';
import { ErrorPage } from 'views/pages/error';

const BmwProducts = Loadable(lazy(() => import('views/pages/bmwProductPage')));
const BmwTrack = Loadable(lazy(() => import('views/pages/bmwProductPage/trackingTool')));
const BmwTrackSearchBar = Loadable(lazy(() => import('views/pages/bmwProductPage/bmwTrackBar')));

const BMWroutes = {
  path: '/',
  element: (
    <NavMotion>
      <MinimalLayout />
    </NavMotion>
  ),
  children: [
    // {
    //   path: '/',
    //   element: <BmwProducts />
    // },
    {
      path: '/trackingTool/:id',
      element: <BmwTrack />
    },
    {
      path: '/',
      element: <BmwTrackSearchBar />
    },
    {
      path: '/sample',
      element: <Sample />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]
};

export default BMWroutes;
