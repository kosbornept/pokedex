import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div className='listContainer'>
        {pokemon.map(p => (
            <div className='listItem' pokemon={pokemon}>{p}</div>
        ))}
    </div>
  )
}
