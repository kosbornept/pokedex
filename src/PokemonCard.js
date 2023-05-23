import React from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                    <Tabs>
                        <TabList className="tablistBar">
                            <Tab>Official Artwork</Tab>
                            <Tab>Sprite</Tab>
                            {modalData.data.sprites.front_shiny &&<Tab>Shiny Sprite</Tab>}
                            {modalData.data.sprites.front_female && <Tab>Female Sprite</Tab>}
                            {modalData.data.sprites.other.home.front_default && <Tab>Home</Tab>}
                        </TabList>

                        <TabPanel>
                            <img className='pokemonArt' alt={modalData.data.name} src={modalData.data.sprites.other['official-artwork'].front_default} title='Official Artwork' />
                        </TabPanel>
                        <TabPanel>
                            <img className='pokemonSpriteArt' alt={modalData.data.name} src={modalData.data.sprites.front_default} title='Default Sprite' />
                        </TabPanel>
                        {modalData.data.sprites.front_shiny && <TabPanel><img className='pokemonSpriteArt' alt={modalData.data.name} src={modalData.data.sprites.front_shiny} title='Shiny Sprite' /></TabPanel>}
                        {modalData.data.sprites.front_female && <TabPanel><img className='pokemonSpriteArt' alt={modalData.data.name} src={modalData.data.sprites.front_female} title='Default Sprite' /></TabPanel>}
                        {modalData.data.sprites.other.home.front_default && <TabPanel><img className='pokemonArt' alt={modalData.data.name} src={modalData.data.sprites.other.home.front_default} title='Home' /></TabPanel>}
                    </Tabs>
                    <div>
                        <select onChange={handleChange} className='moveSelect'>
                            <option selected="selected" disabled="disabled">--Select a move--</option>
                            {modalData.data.moves.map(m => {
                                return <option key={m.move.name} value={m.move.url}>{m.move.name}</option>
                            })}
                        </select> 
                        <div className='moveDetails'>
                            <div className='moveDiv1'>
                                <p>{moveData && 'Type: ' + moveData.data.type.name}</p>
                                <p>{moveData && 'Class: ' + moveData.data.damage_class.name}</p>
                            </div>
                            <div className='moveDiv2'>
                                <p>{moveData && 'Power: ' + moveData.data.power}</p>
                                <p>{moveData && 'PP: ' + moveData.data.pp}</p>
                            </div>
                            <div className='moveDiv3'>
                                <p>{moveData && 'Entry: ' + moveData.data.flavor_text_entries.find(c => c.language.name === "en").flavor_text}</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>      
            </div>
        </div>
    )
    }
