import { useEffect, useRef } from "react";

function MyUseRef() {
	const boxRef = useRef<any>(null);
	const animationFrameRef = useRef<any>(null);

	useEffect(() => {
		const boxElem = boxRef.current;
		let position = 0;

		const animate = () => {
			position += 1;
			if (position > window.innerWidth - 100) {
				position = -100; // 如果方块移动到屏幕的右侧，则从左侧重新开始
			}
			boxElem.style.transform = `translateX(${position}px)`;
			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationFrameRef.current); // 在组件卸载时取消动画
		};
	}, []);
	return (
		<div
			ref={boxRef}
			style={{ width: "100px", height: "100px", background: "blue" }}
		></div>
	);
}

export default MyUseRef;
