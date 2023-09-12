import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "@/entities/User";
import type { ThunkConfig } from "@/app/providers/StoreProvider";
import axios from "axios";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkApi) => {
  // const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await axios.post("http://localhost:8000/login", authData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue("error");
  }

  // try {
  //   const response = await extra.api.post<User>("/login", authData);

  //   if (!response.data) {
  //     throw new Error();
  //   }

  //   // dispatch(userActions.setAuthData(response.data));
  //   return response.data;
  // } catch (e) {
  //   console.log(e);
  //   return rejectWithValue("error");
  // }
});
