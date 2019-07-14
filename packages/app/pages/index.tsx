import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import useConfig from '../hooks/useConfig';
import useEditor from '../hooks/useEditor';
import useTransformer from '../hooks/useTransformer';

import Layout from '../layouts/Layout';
import Loader from '../components/Loader';
import NavBar from '../containers/NavBar';
import SettingsBar from '../containers/SettingsBar';

const Playground = dynamic(() => import('../containers/Playground'), {
  ssr: false,
  loading: Loader,
});

function HomePage() {
  const { config, setQuote, setType } = useConfig();
  const { editor, setSvg, setFile } = useEditor();
  const { transformer, transform, clear } = useTransformer();

  useEffect(() => {
    if (editor.svg) {
      transform(editor.svg, config);
    } else {
      clear();
    }
  }, [config.jsxSingleQuote, config.type, editor.svg]);

  return (
    <Layout>
      <NavBar loading variant={transformer.variant} />

      <SettingsBar
        type={config.type}
        jsxSingleQuote={config.jsxSingleQuote}
        variant={transformer.variant}
        onChangeType={setType}
        onChangeQuote={setQuote}
      />

      <Playground
        svg={editor.svg}
        jsx={transformer.jsx}
        onDrop={setFile}
        onChange={setSvg}
      />
    </Layout>
  );
}

export default HomePage;
