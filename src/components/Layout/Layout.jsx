import { Layout } from './Layout.styled';
import { Suspense } from 'react';
import Appbar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Loader() {
  return (
    <Layout>
      <Appbar />
      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}
