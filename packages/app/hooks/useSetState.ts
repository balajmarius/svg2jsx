import { useReducer } from 'react';

export default function useSetState<T>(initialState: T): [T, Function] {
  return useReducer(
    (prevState: T, state: T) => ({
      ...prevState,
      ...state,
    }),
    initialState,
  );
}
