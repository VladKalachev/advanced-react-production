import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
// import { CombinedState, Reducer } from "redux";
import type { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
