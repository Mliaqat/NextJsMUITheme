import { createSlice } from "@reduxjs/toolkit";
import { switchtoDarkReducer, switchtolightReducer } from "./reducers";

const LayoutInitialState = {
  darkTheme: false,
} as any;

const LayoutSlice = createSlice({
  name: "layout",

  initialState: LayoutInitialState,

  reducers: {
    switchtodark: switchtoDarkReducer,
    switchtolight: switchtolightReducer,
  },
});
export const { switchtodark, switchtolight } = LayoutSlice.actions;
export default LayoutSlice.reducer;
