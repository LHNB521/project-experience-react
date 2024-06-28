import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import { createVitePlugins } from './vite/createVitePlugins';
import { buildOptions } from './vite/buildOptions';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	const { VITE_SERVER_PORT } = env;
	return {
		plugins: createVitePlugins(),
		resolve: {
			alias: {
				'@': '/src',
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					charset: false
				},
			},
		},
		server: {
			open: true,
			port: Number(VITE_SERVER_PORT),
		},
		build: buildOptions()
	}
})

