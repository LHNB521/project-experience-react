import { useEffect, useLayoutEffect, useRef, useState } from "react";

function MyUseLanyoutEffect() {

	const [heightEffect, setHeightEffect] = useState(0);
	const [heightLayoutEffect, setHeightLayoutEffect] = useState(0);
	const refEffect = useRef<any>(null);
	const refLayoutEffect = useRef<any>(null);

	useEffect(() => {
		if (refEffect.current) {
			setHeightEffect(refEffect.current.offsetWidth);
		}
	}, []);

	useLayoutEffect(() => {
		if (refLayoutEffect.current) {
			setHeightLayoutEffect(refLayoutEffect.current.offsetWidth);
		}
	}, []);

	return (
		<div>
			<div>
				<h2>使用 useEffect</h2>
				<div ref={refEffect} style={{ width: '200px', height: '50px', background: 'lightgray' }}>这是一个方块</div>
				<div style={{ width: '100px', height: `${heightEffect}px`, background: 'red', marginTop: '10px' }}>红色方块</div>
			</div>

			<div style={{ marginTop: '30px' }}>
				<h2>使用 useLayoutEffect</h2>
				<div ref={refLayoutEffect} style={{ width: '200px', height: '50px', background: 'lightgray' }}>这是一个方块</div>
				<div style={{ width: '100px', height: `${heightLayoutEffect}px`, background: 'blue', marginTop: '10px' }}>蓝色方块</div>
			</div>
		</div>
	);
}

export default MyUseLanyoutEffect
