import useSetState from './useSetState';

import post, { ConfigType } from '../helpers/post';
import { VariantType } from '../helpers/getVariantColor';

interface TransformerType {
  jsx?: string;
  variant: VariantType;
  loading?: boolean;
}

export default function useTransformer() {
  const [transformer, setTransformer] = useSetState(<TransformerType>{
    jsx: undefined,
    loading: false,
    variant: VariantType.CLEAR,
  });

  async function transform(svg: string, config: ConfigType) {
    try {
      setTransformer({
        loading: true,
      });
      const { jsx } = await post('/', {
        svg,
        config,
      });
      setTransformer({
        jsx,
        variant: VariantType.SUCCESS,
      });
    } catch {
      setTransformer({
        jsx: undefined,
        variant: VariantType.ERROR,
      });
    } finally {
      setTransformer({
        copied: false,
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
