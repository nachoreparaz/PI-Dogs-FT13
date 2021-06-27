import React, { useEffect, useState } from 'react';
import './Create.css'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { getTemper } from '../actions';

const Create = () => {
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const [input3,setInput3]=useState("")
    const [input4,setInput4]=useState("")
    const [input5,setInput5]=useState("")
    const [input6,setInput6]=useState("")
    const [input7,setInput7]=useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTemper())
    }, [])

    const temperRedux = useSelector( state => state.getTemper)

    // var tempArray = []
    // for(var i = 0; i < temperRedux.length; i++){
    //     tempArray.push(temperRedux[i].temper)
    // }


    // for(var j = 0; j < tempArray.length; j++){
    //     var a  = tempArray[j].split(' ')
    //     splited.push(a)
    // }

    // console.log(tempArray.splice("",10))

    const handleSubmit=()=>{
       axios({
        method: 'post',
        url: 'http://localhost:3001/dog',
        data: {
            "name": input1,
            "altura": input2,
            "peso": input3,
            "años": input4,
            "temper": input5,
            "raza": input6,
        }
    },
    );
    
    }
    return (
        <div className = 'create-container'>
            <form onSubmit={ handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <div>
                        <input type="text" onChange={(e)=>setInput1(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Altura: </label>
                    <div>
                        <input type="number" onChange={(e)=>setInput2(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Peso: </label>
                    <div>
                        <input type="number" onChange={(e)=>setInput3(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Años de vida: </label>            
                    <div>
                        <input type="number" onChange={(e)=>setInput4(e.target.value)}/>
                    </div>
                    <label>Temperamento: </label>
                    <div>
                        <input type="text" onChange={(e)=>setInput5(e.target.value)}></input>
                    </div>
                </div>
                <div>
                <label>Raza: </label>
                    <div>
                        <input type="text" onChange={(e)=>setInput6(e.target.value)}></input>
                    </div>
                </div>
                {/* <div>
                <label>Imagen(opcional)</label>
                    <div>
                        <input type="text" onChange={(e)=>setInput7(e.target.value)}></input>
                    </div>
                </div> */}
                <div className = 'btnCreate'>
                    <button>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create
