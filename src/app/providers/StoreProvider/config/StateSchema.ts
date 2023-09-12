import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import { AxiosInstance } from "axios";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // Асинхронные редюсеры
  loginForm?: LoginSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
