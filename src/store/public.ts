import { createSlice } from "@reduxjs/toolkit";

export type ThemeType = 'dark' | 'light'

export const publicSlice = createSlice({
	name: 'public',
	initialState: {
		isLoading: false,
		theme: 'light' as ThemeType,
	},
	reducers: {
		/** 设置主题 */
		setThemeValue: (state, action) => {
			state.theme = action.payload;
		},
		// 修改loading状态
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	}
})
export const { setLoading, setThemeValue } = publicSlice.actions;
export default publicSlice.reducer;
