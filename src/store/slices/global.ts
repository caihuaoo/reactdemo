import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElementType } from "react";

type MenuItem = {
  key: string;
  name: string;
  path: string;
  component: ElementType;
};

interface GlobalState {
  menuList: Array<MenuItem>;
  currentComponent: MenuItem;
}

const initialState: GlobalState = {
  menuList: [],
  currentComponent: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMenuList: (state, action: PayloadAction<Array<MenuItem>>) => {
      state.menuList = action.payload;
    },
    setCurrentComponent: (state, action: PayloadAction<MenuItem>) => {
      state.currentComponent = action.payload;
    },
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
export type { GlobalState };
