import MyUseContext from './hooks/useContext'
import MyUseReducer from './hooks/useReducer'
import MyUseCallback from "./hooks/MyUseCallback"
import MyUseEffect from "./hooks/MyUseEffect"
import MyUseLanyoutEffect from "./hooks/MyUseLayoutEffect"
import MyUseMemo from "./hooks/MyUseMemo"
import MyUseRef from "./hooks/MyUseRef"

function App() {

	return (
		<>
			<MyUseReducer />
			<MyUseContext />
			<MyUseRef />
			<MyUseEffect />
			<MyUseLanyoutEffect />
			<MyUseMemo />
			<MyUseCallback />
		</>
	)
}

export default App
