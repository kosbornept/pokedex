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
                <div>
                    <div className='typeContainer'>
                        <h4 className={modalData.data.types[0].type.name}>{modalData.data.types[0].type.name}</h4>
                        {modalData.data.types[1] && <h4 className={modalData.data.types[1].type.name}>{modalData.data.types[1].type.name}</h4>}
                    </div>
                    <div>
                        <h5>Height: {modalData.data.height}</h5>
                        <h5>Weight: {modalData.data.weight}</h5>
                    </div>
                    <div>
                        Moveset
                    </div>
                    <div>
                        Abilities
                    </div>
                    <div>
                        Stats
                    </div>
                </div>
                <div>
                    Image Container
                </div>
            </div>      
            </div>
        </div>
    )
    }
