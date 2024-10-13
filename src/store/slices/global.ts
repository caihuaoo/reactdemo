import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuItem = {
  key: string;
  title: string;
  path: string;
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
      console.log(action.payload);
      state.currentComponent = action.payload;
    },
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
export type { GlobalState };
