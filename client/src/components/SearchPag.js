import React from 'react';
import './SearchPag.css'

const SearchPag = ({ dogsPerPage, totalDogs, paginate }) => {

    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(totalDogs / dogsPerPage ); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <div className = 'ctnSearch'>
                {
                    pageNumbers.map(number => (
                        <div key = {number} className='pagCtn'>
                            <a onClick={() => paginate(number)} href='#' className='btnA'>
                              {number}  
                            </a>
                        </div>
                    ))
                }
        </div>
        </div>
    )
}

export default SearchPag
