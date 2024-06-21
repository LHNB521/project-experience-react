import { useEffect, useState } from "react";

function MyUseEffect() {
	const [state, setState] = useState(0);
	const [state1, setState1] = useState(0);


	useEffect(() => {
		console.log('state', 'useEffect');
	})

	useEffect(() => {
		console.log('state1', 'useEffect');
	}, [state1])

	useEffect(() => {
		console.log('useEffect');
	}, [])

	return (
		<>
			<p>点击了 {state} 次</p>
			<button onClick={() => setState(state + 1)}>点击</button>

			<p>点击了 {state1} 次</p>
			<button onClick={() => setState1(state1 + 1)}>点击</button>
		</>
	)
}
export default MyUseEffect;
