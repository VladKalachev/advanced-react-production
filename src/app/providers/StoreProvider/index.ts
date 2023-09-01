import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type { StateSchema } from "./config/StateSchema";

export { StoreProvider, createReduxStore };

export type { StateSchema, AppDispatch };
