
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';

/**
 * 获取常用的状态数据
 */
export const useCommonStore = () => {
	// 主题
	const theme = useSelector((state: RootState) => state.public.theme);

	return {
		theme,
	} as const;
};
