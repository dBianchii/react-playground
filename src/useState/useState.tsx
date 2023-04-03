import React, { useEffect, useMemo, useState } from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
	<React.StrictMode>
		<UseStateTest />
	</React.StrictMode>,
	document.getElementById("root")
)

interface PokemonData {
	name: string
	sprites: {
		back_default: string
		front_default: string
		back_shiny: string
	}
}

function UseStateTest() {
	const [pokemonName, setPokemonName] = useState("ditto")
	const [apiData, setApiData] = useState<PokemonData | null>(null)

	useEffect(() => {
		console.log("useEffect")
		//pokemonapi fetch ditto
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
			.then((response) => response.json())
			.then((json: PokemonData) => {
				console.log(json)
				setApiData(json)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [pokemonName])

	return (
		<div>
			<h1>UseStateTest</h1>
			<input type="text" onChange={(e) => setPokemonName(e.target.value)} />
			<p>Name: {`${pokemonName}`}</p>

			{apiData && (
				<div>
					<p>Name: {apiData.name}</p>
					<img src={apiData.sprites.back_default} alt={apiData.name} />
					<img src={apiData.sprites.front_default} alt={apiData.name} />
				</div>
			)}
		</div>
	)
}
