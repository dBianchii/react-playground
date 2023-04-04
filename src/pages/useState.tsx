import { useState } from "react"

export default function UseState() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="flex flex-col">
				<p className="text-4xl text-center inline text-white">Count: {count}</p>

				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-xs" onClick={() => setCount(count + 1)}>
					Button
				</button>
				<button className="text-4xl text-center inline text-white" onClick={() => setCount(count - 1)}>
					Decrement
				</button>
			</div>
		</>
	)
}
