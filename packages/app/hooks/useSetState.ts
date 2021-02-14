import { Dispatch, useReducer } from 'react';

export default function useSetState<T>(initialState: T): [T, Dispatch<T>] {
  return useReducer(
    (prevState: T, state: T) => ({
      ...prevState,
      ...state,
    }),
    initialState,
  );
}
