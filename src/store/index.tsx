import { configureStore } from "@reduxjs/toolkit";
import publicReducer from './public';

export const store = configureStore({
	reducer: {
		public: publicReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
