import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import { createVitePlugins } from './vite/createVitePlugins';

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
		server: {
			open: true,
			port: Number(VITE_SERVER_PORT),
		},
	}
})
function handleEnv(env: Record<string, string>) {
	throw new Error('Function not implemented.');
}

