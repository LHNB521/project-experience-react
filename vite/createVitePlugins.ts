import react from '@vitejs/plugin-react-swc'
import type { PluginOption } from "vite"
import { versionUpdatePlugin } from "./version"

export function createVitePlugins() {
	const vitePlugins: PluginOption[] = [
		react(),
		// 版本控制
		versionUpdatePlugin()
	]

	return vitePlugins
}
