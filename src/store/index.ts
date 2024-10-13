import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/global";
import type { GlobalState } from "./slices/global";

// 定义总的状态类型
interface RootState {
  global: GlobalState;
}

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
export type { RootState };
