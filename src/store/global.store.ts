import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@root/store/reducers/theme.reducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
