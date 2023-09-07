import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// import { CombinedState, Reducer } from "redux";
import type { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
