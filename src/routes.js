import React from 'react';
import Loadable from 'react-loadable';
import { CircularProgress } from '@material-ui/core';
import { LogoLoader } from './components/loaders';

import { Content, colors } from './components';

const Loading = () => (
  <Content height="100%" flex justify="center" position="absolute" style={{ zIndex: 1100 }} align="center">
    <CircularProgress style={{ color: colors.primary }} size={24} />
  </Content>
);

const Vendors = Loadable({
  loader: () => import('./views/Vendors/Vendors'),
  loading: Loading,
});

const Orders = Loadable({
  loader: () => import('./views/Orders/Orders'),
  loading: Loading,
});

const routes = [
  {
    path: '/vendors', exact: true, name: 'Vendors', component: Vendors
  },
  {
    path: '/orders', exact: true, name: 'Orders', component: Orders
  },
];

export default routes;
