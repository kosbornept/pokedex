import React from 'react'

export default function Pagination({ goNextPage, goPrevPage }) {
  return (
    <div className='btnContainer'>
        {goPrevPage && <button className='btn' onClick={goPrevPage}>Previous</button>}
        {goNextPage &&<button className='btn' onClick={goNextPage}>Next</button>}
    </div>
  )
}
