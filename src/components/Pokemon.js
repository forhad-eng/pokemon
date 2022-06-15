import { useEffect, useState } from 'react'
import PokemonDetails from './PokemonDetails/PokemonDetails'

const Pokemon = () => {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonDetails, setPokemonDetails] = useState({})

    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const res = await fetch(url)
        const data = await res.json()
        setPokemonDetails(data)
    }

    useEffect(() => {
        getPokemon()
    }, [pokemonName])

    return (
        <div>
            <h2 className="text-3xl my-10">Welcome To The World Of Pokemon</h2>
            <input
                onChange={e => setPokemonName(e.target.value)}
                type="text"
                placeholder="Type a pokemon name"
                class="input input-bordered input-primary w-full max-w-xs"
            />

            {pokemonDetails.name && <PokemonDetails pokemonDetails={pokemonDetails} />}
        </div>
    )
}

export default Pokemon
