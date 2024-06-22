import { useEffect, useReducer } from "react";

const initialState = {
	count: 0,
};

function initState(initialState: any) {
	const countOld = localStorage.getItem('count')
	return { count: countOld ? Number(countOld) : initialState };
}
function reducer(state: any, action: any) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

function MyUseReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [count, setCount] = useReducer(reducer, 0, initState);
	useEffect(() => {
		localStorage.setItem('count', count.count)
	}, [count])

	return (
		<>
			<div>
				{state.count}
			</div>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<div>
				{count.count}
			</div>
			<button onClick={() => setCount({ type: 'increment' })}>+</button>
			<button onClick={() => setCount({ type: 'decrement' })}>-</button>
		</>
	);
}

export default MyUseReducer;
