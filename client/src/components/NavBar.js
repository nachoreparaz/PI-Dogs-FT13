import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { getDogsbyBreed } from '../actions';
import './NavBar.css'

const NavBar = () => {

    const [ name, setName ] = useState('')

    const dispatch = useDispatch()

    function handleOnChange(e){
        setName( e.target.value)
      }
    
      function handleSubmit(e){
        e.preventDefault();
        getDogsbyBreed(name)
        setName("")
      }

    return (  
           <div id="navlist">
                <Link to = "/">
                    <span className = 'btn'>Inicio</span>
                </Link>
                <Link to = "/Home">
                    <span className = 'btn'>Home</span>
                </Link>
                <Link to = '/Search'>
                    <span className = 'btn'>Search</span>
                </Link>
                <Link to = '/Create'>
                    <span className = 'btn'>Create Dog</span>
                </Link>
                <div className="search">
                    <form   onSubmit ={  handleSubmit }>
                        <input 
                            type="text"
                            placeholder = 'Search Dogs'
                            value={ name }
                            onChange={ handleOnChange }
                            />
                         <Link to = '/Search'>
                            <button 
                                type="submit" 
                                className = "fa fa-search" 
                                onClick = { () => dispatch(getDogsbyBreed(name))}>
                                BUSCAR
                            </button>
                        </Link>
                    </form>
                </div>
            </div>          

    )
}

export default NavBar

  {/* <form className = 'form' onSubmit ={(e) =>{
                 handleSubmit(e)
                 setName('')
           }}>
                <div>
                    <label>Perro: </label>
                        <input
                        type="text"
                        id="title"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleOnChange }
                        />
                </div>
                <Link to = '/Search'>
                  <button 
                    type="submit" 
                    className = 'btnSearch' 
                    onClick = { () => dispatch(getDogsbyBreed(name))}>
                      BUSCAR
                  </button>
                  </Link>
           </form>  */}
