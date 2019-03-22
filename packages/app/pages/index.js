import React from 'react';

import Layout from '../layouts/Layout';

import NavBar from '../composites/NavBar';
import SettingsBar from '../composites/SettingsBar';

function HomePage() {
  return (
    <Layout>
      <NavBar />
      <SettingsBar />
    </Layout>
  );
}

export default HomePage;
