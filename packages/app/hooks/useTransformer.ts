import axios from 'axios';

import useSetState from './useSetState';

import { VariantType } from '../utils/getVariantColor';

interface ITransformer {
  jsx?: string;
  variant: VariantType;
  loading?: boolean;
}

export interface IConfig {
  jsxSingleQuote: boolean;
  type: 'functional' | 'class';
}

export default function useTransformer() {
  const [transformer, setTransformer] = useSetState(<ITransformer>{
    jsx: undefined,
    loading: false,
    variant: VariantType.CLEAR,
  });

  async function transform(svg: string, config: IConfig): Promise<void> {
    try {
      setTransformer({
        loading: true,
      });
      const { data } = await axios.post('/api/transform', {
        svg,
        config,
      });
      setTransformer({
        jsx: data.jsx,
        variant: VariantType.SUCCESS,
      });
    } catch {
      setTransformer({
        jsx: undefined,
        variant: VariantType.ERROR,
      });
    } finally {
      setTransformer({
        loading: false,
      });
    }
  }

  function clear() {
    setTransformer({
      jsx: undefined,
      loading: false,
      variant: VariantType.CLEAR,
    });
  }

  return {
    transformer,
    clear,
    transform,
  };
}
