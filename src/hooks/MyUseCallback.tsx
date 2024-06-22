import { useCallback, useState } from "react"

function Item({ name, age, onDelete }: any) {
	console.log('Item', name, age)
	return (
		<>
			<p>{name},{age}</p>
			<button onClick={() => onDelete(name)}>删除</button>
		</>
	)
}
function MyUseCallback() {
	const [state, setState] = useState([
		{ name: 'a', age: 1 },
		{ name: 'b', age: 2 },
	])

	// const handleDelete = (name: any) => {
	// 	setState(state.filter((item) => item.name !== name))
	// }
	const handleDelete = useCallback((name: any) => {
		setState(state.filter((item) => item.name !== name))
	}, [])

	return (
		<>
			{
				state.map(item => (
					<Item key={item.name} name={item.name} age={item.age} onDelete={handleDelete} />
				))
			}
		</>
	)
}
export default MyUseCallback
