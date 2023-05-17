import React from 'react';
import axios from 'axios';

export default function PokemonCard( { show, onClose, modalData, moveData, setMoveData }) {

    const getData = async (event) => {
        await axios.get(event).then(res => {
            setMoveData(res);
        });
    }

    function handleChange(e) {
        getData(e.target.value);
    }

    if(!show) {
        return null
    }

    return (
        <div className='modal' onClick={onClose}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
            <h1 className='modalTitle'>#{modalData.data.id} - {modalData.data.name}</h1>
            <div className='modalBody'>
                <div className='modalLeft'>
                    Type
                    <div className='typeContainer'>
                        <h4 className={modalData.data.types[0].type.name}>{modalData.data.types[0].type.name}</h4>
                        {modalData.data.types[1] && <h4 className={modalData.data.types[1].type.name}>{modalData.data.types[1].type.name}</h4>}
                    </div>
                    Size
                    <div className='physicalContainer'>
                        <h5>Height: {modalData.data.height}</h5>
                        <h5>Weight: {modalData.data.weight}</h5>
                    </div>
                    Abilities
                    <div className='abilityContainer'>
                        <h5>Ability 1: {modalData.data.abilities[0].ability.name}
                        </h5>
                        {modalData.data.abilities[1] && <h5>Ability 2: {modalData.data.abilities[1].ability.name}</h5>}
                        {modalData.data.abilities[2] && <h5>Ability 3: {modalData.data.abilities[2].ability.name}</h5>}
                        {modalData.data.abilities[3] && <h5>Ability 4: {modalData.data.abilities[3].ability.name}</h5>}
                    </div>
                    Base Stats
                    <div className='statsContainer'>
                        <h5>{modalData.data.stats[0].base_stat} {modalData.data.stats[0].stat.name}</h5>
                        <h5>{modalData.data.stats[1].base_stat} {modalData.data.stats[1].stat.name}</h5>
                        <h5>{modalData.data.stats[2].base_stat} {modalData.data.stats[2].stat.name}</h5>
                        <h5>{modalData.data.stats[3].base_stat} {modalData.data.stats[3].stat.name}</h5>
                        <h5>{modalData.data.stats[4].base_stat} {modalData.data.stats[4].stat.name}</h5>
                        <h5>{modalData.data.stats[5].base_stat} {modalData.data.stats[5].stat.name}</h5>
                    </div>
                </div>
                <div className='modalRight'>
                    <img alt={modalData.data.name} src={modalData.data.sprites.other['official-artwork'].front_default} title='Official Artwork' />
                    <div>
                        <select onChange={handleChange} className='moveSelect'>
                            <option>--Select a move--</option>
                            {modalData.data.moves.map(m => {
                                return <option key={m.move.name} value={m.move.url}>{m.move.name}</option>
                            })}
                        </select> 
                        <div className='moveDetails'>
                            <p>{moveData && 'Class: ' + moveData.data.damage_class.name}</p>
                            <p>{moveData && 'Type: ' + moveData.data.type.name}</p>
                            <p>{moveData && 'Entry: ' + moveData.data.flavor_text_entries[0].flavor_text}</p>
                            <p>{moveData && 'Power: ' + moveData.data.power}</p>
                            <p>{moveData && 'PP: ' + moveData.data.pp}</p>
                        </div>  
                    </div>
                </div>
            </div>      
            </div>
        </div>
    )
    }
