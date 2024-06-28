import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import '@/assets/css/index.less'
import '@/assets/fonts/font.less';
// 状态管理
import { Provider } from 'react-redux';
import { store } from './store/index.tsx';

import Router from './router';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>,
)

const loadingElement = document.getElementById('loading')
if (loadingElement && loadingElement.style?.display !== 'none') {
	loadingElement.style.display = 'none'
}
