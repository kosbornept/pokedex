import React from 'react'

export default function PokemonCard( { show, onClose, modalData }) {
    if(!show) {
        return null
    }

    // function closeOnEscapeDown(e) {
    //     if((e.charCode || e.keyCode) === 27) {
    //         onClose()
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener('keydown', closeOnEscapeDown)
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', closeOnEscapeDown)
    //     }
    // }, [closeOnEscapeDown])

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
                    {/* <div>
                        Moveset
                    </div> */}
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
                </div>
            </div>      
            </div>
        </div>
    )
    }
