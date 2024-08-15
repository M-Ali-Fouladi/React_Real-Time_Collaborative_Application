import { configureStore, createSlice } from "@reduxjs/toolkit";

const docSlice = createSlice({
  name: "document",
  initialState: {
    content: "",
  },
  reducers: {
    setContent(state, action) {
      state.content = action.payload;
    },
    applyChange(state, action) {
      state.content += action.payload;
    },
  },
});

export const { setContent, applyChange } = docSlice.actions;
export const store = configureStore({
  reducer: {
    document: docSlice.reducer,
  },
});
