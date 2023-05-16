import React from 'react'

export default function Pagination({ goNextPage, goPrevPage }) {
  return (
    <div className='btnContainer'>
        {goPrevPage && <button hidden className='btn' onClick={goPrevPage}>Previous</button>}
        {goNextPage &&<button hidden className='btn' onClick={goNextPage}>Next</button>}
    </div>
  )
}
