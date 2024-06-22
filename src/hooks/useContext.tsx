import React, { useContext } from "react";

const MyContext = React.createContext('1');

function MyUseContext() {
	return (
		<MyContext.Provider value="2">
			<Todo />
		</MyContext.Provider>
	)
}

function Todo() {
	return (
		<div>
			<Todo2 />
		</div>
	)
}
function Todo2() {
	const value = useContext(MyContext);
	return (
		<>
			{value}
		</>
	)
}
export default MyUseContext;
