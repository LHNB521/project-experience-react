import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/css/index.less'
import '@/assets/fonts/font.less';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)

const loadingElement = document.getElementById('loading')
if (loadingElement && loadingElement.style?.display !== 'none') {
	console.log('loadingElement', loadingElement)
	loadingElement.style.display = 'none'
}
