import { ChangeEvent } from 'react';

import useSetState from './useSetState';

interface ConfigType {
  type: 'functional' | 'class';
  jsxSingleQuote: boolean;
}

export default function useConfig() {
  const [config, setConfig] = useSetState(<ConfigType>{
    type: 'functional',
    jsxSingleQuote: false,
  });

  function setQuote({ target }: ChangeEvent<HTMLInputElement>): void {
    setConfig({
      jsxSingleQuote: target.checked,
    });
  }

  function setType({ target }: ChangeEvent<HTMLInputElement>): void {
    setConfig({
      type: target.checked ? 'functional' : 'class',
    });
  }

  return {
    config,
    setQuote,
    setType,
  };
}
