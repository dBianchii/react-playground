import { useState } from "react"

export default function UseState() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="flex p-44 flex-col items-center">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-xs" onClick={() => setCount(count + 1)}>
					Add
				</button>
				<p className="text-4xl my-4 text-center inline text-white">Count: {count}</p>

				<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full max-w-xs" onClick={() => setCount(count - 1)}>
					Decrement
				</button>
			</div>
		</>
	)
}
