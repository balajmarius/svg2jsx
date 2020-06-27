import { ChangeEvent } from 'react';
import { ConfigType } from '@svg2jsx/transform';

import useSetState from './useSetState';

export default function useConfig() {
  const [config, setConfig] = useSetState<ConfigType>({
    memo: false,
    cleanupIDs: true,
    jsxSingleQuote: false,
    reactNative: false,
    type: 'functional',
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

  function setMemo({ target }: ChangeEvent<HTMLInputElement>): void {
    setConfig({
      memo: target.checked,
    });
  }

  function setIDs({ target }: ChangeEvent<HTMLInputElement>): void {
    setConfig({
      cleanupIDs: target.checked,
    });
  }

  function setReactNative({ target }: ChangeEvent<HTMLInputElement>): void {
    setConfig({
      reactNative: target.checked,
    });
  }

  return {
    config,
    setQuote,
    setType,
    setIDs,
    setMemo,
    setReactNative,
  };
}
