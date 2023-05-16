import React from 'react'

export default function PokemonList({ fPD }) {
  return (
    <div className='listContainer'>
        {fPD.map(p => (
          <div className='pokeContainer'>
            <h3 key={p.data.name} className='listItem' fPD={fPD}>
              {p.data.name}
            </h3>
            <div className='typeContainer'>
              <h4 className={p.data.types[0].type.name}>{p.data.types[0].type.name}</h4>
              {p.data.types[1] && <h4 className={p.data.types[1].type.name}>{p.data.types[1].type.name}</h4>}
            </div>
            <img className='pokeImg' alt={p.data.name} src={p.data.sprites.other.dream_world.front_default} />
          </div>
        ))}
    </div>
  )
}
