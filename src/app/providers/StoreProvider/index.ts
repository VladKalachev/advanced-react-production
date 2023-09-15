import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
  ReduxStoreWithManager,
} from "./config/StateSchema";

export { StoreProvider, createReduxStore };

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
};
