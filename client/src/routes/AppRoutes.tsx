import { lazy, type ReactNode } from 'react';
import { Route, Routes } from 'react-router';

import {
  HOME,
  EXPERIMENT,
  EXPERIMENTS,
  STEPS,
  STEP,
  SCHEMA,
} from './routes.ts';

import Home from '../pages/Home.tsx';
import Experiments from '../pages/Experiments.tsx';
import Experiment from '../pages/Experiment.tsx';
import Steps from '../pages/Steps.tsx';
import Schema from '../pages/Schema.tsx';
import Step from '../pages/Step.tsx';

type navigationRouteType = { path: string; element: ReactNode };

const Layout = lazy(() => import('@/components/Layout/Layout'));

const AppRoutes = () => {
  const navigationRoutes: navigationRouteType[] = [
    {
      path: HOME,
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: EXPERIMENTS,
      element: (
        <Layout>
          <Experiments />
        </Layout>
      ),
    },
    {
      path: EXPERIMENT,
      element: (
        <Layout>
          <Experiment />
        </Layout>
      ),
    },
    {
      path: STEPS,
      element: (
        <Layout>
          <Steps />
        </Layout>
      ),
    },
    {
      path: STEP,
      element: (
        <Layout>
          <Step />
        </Layout>
      ),
    },
    {
      path: SCHEMA,
      element: (
        <Layout>
          <Schema />
        </Layout>
      ),
    },
  ];

  return (
    <Routes>
      {navigationRoutes.map((route: navigationRouteType) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
