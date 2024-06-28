import type { BuildOptions } from "vite";
import { splitJSModules } from './utils/tools';

export function buildOptions(): BuildOptions {
	return {
		chunkSizeWarningLimit: 1000, // 文件大小超过1000kb，警告
		sourcemap: process.env.NODE_ENV !== 'production', // 是否生成source map
		minify: 'terser', // 压缩方式
		terserOptions: {
			compress: {
				drop_console: true, // 生产环境自动删除console
				drop_debugger: true, // 生产环境自动删除debugger
			}
		},
		rollupOptions: {
			output: {
				chunkFileNames: 'asstes/js/[name]-[hash].js',
				entryFileNames: 'asstes/js/[name]-[hash].js',
				assetFileNames: 'asstes/[ext]/[name]-[hash].[ext]',
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return splitJSModules(id)
					}
				}
			}
		}
	}
}
