// useMemo hook 核心目的通过缓存计算结果，避免重复计算
// const cachedValue = useMemo(calculateValue, dependencies)
// calculateValue：这是一个用于计算我们想要缓存的值的函数。为了确保结果的稳定性和预测性，这个函数应该是一个纯函数。这意味着，它在相同的输入下总是返回相同的输出，并且没有任何副作用。
// dependencies：这是一个数组，包含useMemo所依赖的变量或值。当数组中的任何值发生变化时，calculateValue函数将被重新执行。

import { useMemo, useState } from "react";

function MyUseMemo() {
	const [count, setCount] = useState<any>(0);

	const all = useMemo(() => {
		console.log('useMemo');
		let list = [];
		for (let i = 1; i <= 10; i++) {
			list.push({ id: i, name: `User${i}` });
		}
		return list;
	}, [count]);

	return (
		<>
			{/* 每一次更改查询框内容，都会触发useMemo */}
			<input
				value={count}
				onChange={(e) => setCount(e.target.value)}
				placeholder="Search by name..."
			/>
			{
				all.map((item: any) => {
					return (
						<div key={item.id}>{item.name}</div>
					);
				})
			}
		</>
	)
}
export default MyUseMemo;
