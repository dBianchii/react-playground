import React, { useEffect } from "react"
function BreakingBadQuote() {
	interface Data {
		quote: string
		author: string
	}

	const [data, setData] = React.useState<Data[]>([])

	async function setDataFromAPi() {
		const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
		const data = await response.json()
		setData(data)
	}

	useEffect(() => {
		setDataFromAPi()
	}, [])

	return (
		<div className="border rounded-md p-4 px-11">
			<h1 className="text-2xl text-center">{data[0] ? data[0].quote : "Loading..."}</h1>
			<h1 className="text-4xl text-center mt-4 text-red-400">{data[0] && data[0].author}</h1>

			<button onClick={setDataFromAPi} className="bg-red-400 hover:bg-red-500 font-bold py-2 px-4 rounded-md mt-8">
				New Quote
			</button>
		</div>
	)
}

function FirstUseEffectExample() {
	const [count, setCount] = React.useState(0)

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `${count} clicks!`
	})

	return (
		<div className="border rounded-md p-2">
			<p className="text-4xl">You clicked {count} times</p>
			<p className="text-2xl text-gray-400">Take a look at the page tab up there!</p>
			<button onClick={() => setCount(count + 1)} className="bg-red-400 hover:bg-red-500 font-bold py-2 px-4 rounded-md mt-8">
				+1
			</button>
		</div>
	)
}

export default function UseEffect() {
	//Show all examples in a grid
	return (
		<div className="p-8 mx-24 grid grid-cols-2 gap-4 text-center">
			<FirstUseEffectExample />
			<BreakingBadQuote />
		</div>
	)
}
