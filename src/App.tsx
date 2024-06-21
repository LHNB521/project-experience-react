import MyUseCallback from "./hooks/MyUseCallback"
import MyUseEffect from "./hooks/MyUseEffect"
import MyUseLanyoutEffect from "./hooks/MyUseLayoutEffect"
import MyUseMemo from "./hooks/MyUseMemo"
import MyUseRef from "./hooks/MyUseRef"

function App() {

	return (
		<>
			<MyUseRef />
			<MyUseEffect />
			<MyUseLanyoutEffect />
			<MyUseMemo />
			<MyUseCallback />
		</>
	)
}

export default App
