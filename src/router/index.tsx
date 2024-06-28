import { ConfigProvider, theme } from "antd";
import { HashRouter as Router } from "react-router-dom";
import zhCN from 'antd/es/locale/zh_CN';

import { useCommonStore } from '@/hooks/useCommonStore';
// antd主题
const { defaultAlgorithm, darkAlgorithm } = theme;

function Page() {
	const { theme } = useCommonStore();

	return (
		<Router>
			<ConfigProvider
				locale={zhCN}
				theme={{
					algorithm: [theme === 'dark' ? darkAlgorithm : defaultAlgorithm]
				}}
			>
				<div>666</div>
			</ConfigProvider>
		</Router>
	);
}
export default Page;
