import React from 'react'

export default function PokemonList({ fPokeData, setShow,setModalData }) {
  return (
    <div className='listContainer'>
        {fPokeData.map(p => (
          <div onClick={() => {
            setShow(true); 
            setModalData(p);
          }} 
            className='pokeContainer' key={p.data.name}>
            <div className='detailContainer'>
              <div className='nameContainer'>
                <h3 key={p.data.name} className='listItem'>
                  {p.data.name}
                </h3>
              </div>
              <div className='typeContainer'>
                <h4 className={p.data.types[0].type.name}>{p.data.types[0].type.name}</h4>
                {p.data.types[1] && <h4 className={p.data.types[1].type.name}>{p.data.types[1].type.name}</h4>}
              </div>
            </div>
            <div className='imgContainer'>
              {p.data.sprites.other.dream_world.front_default ? <img className='pokeImg' alt={p.data.name} src={p.data.sprites.other.dream_world.front_default} /> : <img className='pokeImg' alt={p.data.name} src={p.data.sprites.other['official-artwork'].front_default} />}
            </div>
          </div>
        ))}
    </div>
  )
}
