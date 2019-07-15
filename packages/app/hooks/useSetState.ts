import { useReducer } from 'react';

export default function useSetState(
  initialState: Object = {},
): [any, Function] {
  return useReducer(
    (prevState: Object, state: Object) => ({
      ...prevState,
      ...state,
    }),
    initialState,
  );
}
