import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Settings from '../components/Settings';

function HomePage() {
  return (
    <Layout>
      <Navbar />
      <Settings />
    </Layout>
  );
}

export default HomePage;
