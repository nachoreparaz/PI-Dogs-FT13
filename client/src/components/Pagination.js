import React from 'react';
import './Pagination.css'


const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage ); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='abc'>
                {
                    pageNumbers.map(number => (
                        <div key = {number} className = 'paginationCtn'>
                            <a onClick={() => paginate(number)} href='#' className='btnA'>
                              {number}  
                            </a>
                        </div>
                    ))
                }
        </div>
    )
}

export default Pagination
