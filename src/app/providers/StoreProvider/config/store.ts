import { counterReducer } from "@/entities/Counter";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { CombinedState, Reducer } from "redux";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const store = configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
