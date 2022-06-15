const PokemonDetails = ({ pokemonDetails }) => {
    const { name, sprites, types } = pokemonDetails
    console.log(pokemonDetails)

    return (
        <div class="card card-compact w-80 shadow mx-auto mt-10 border-[1px]">
            <figure>
                <img src={sprites?.other?.dream_world?.front_default} alt={name} className="mt-4" />
            </figure>
            <div class="card-body">
                <h2 class="card-title mx-auto">Name: {name}</h2>
                <p>Type: {types?.[0].type.name}</p>
            </div>
        </div>
    )
}

export default PokemonDetails
