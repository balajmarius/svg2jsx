import React from 'react';
import dynamic from 'next/dynamic';

import Loader from '../components/Loader';

import Layout from '../layouts/Layout';

import NavBar from '../composites/NavBar';
import SettingsBar from '../composites/SettingsBar';

const Playground = dynamic(() => import('../composites/Playground'), {
  ssr: false,
  loading: Loader,
});

function HomePage() {
  return (
    <Layout>
      <NavBar />
      <SettingsBar />
      <Playground />
    </Layout>
  );
}

export default HomePage;
