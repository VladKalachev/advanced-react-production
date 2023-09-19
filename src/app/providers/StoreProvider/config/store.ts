import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { $api } from "@/shared/api/api";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
// import { CombinedState, Reducer } from "redux";
import type { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
