import React, { useEffect, useState } from "react";
import "./Create.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTemper } from "../actions";

const Create = () => {
  const [name, setname] = useState("");
  const [altura, setaltura] = useState("");
  const [peso, setpeso] = useState("");
  const [años, setaños] = useState("");
  const [temper, settemper] = useState("");
  const [raza, setraza] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemper());
  }, []);

  const temperRedux = useSelector((state) => state.getTemper);

  // var tempArray = []
  // for(var i = 0; i < temperRedux.length; i++){
  //     tempArray.push(temperRedux[i].temper)
  // }

  // for(var j = 0; j < tempArray.length; j++){
  //     var a  = tempArray[j].split(' ')
  //     splited.push(a)
  // }

  // console.log(tempArray.splice("",10))

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El perro fue creado con exito");
    axios({
      method: "post",
      url: "http://localhost:3001/dogi",
      data: {
        name: name,
        altura: altura,
        peso: peso,
        años: años,
        temper: temper,
        raza: raza,
      },
    });
  };
  return (
    <div className="create-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <div>
            <input type="text" onChange={(e) => setname(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Altura: </label>
          <div>
            <input type="number" onChange={(e) => setaltura(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Peso: </label>
          <div>
            <input type="number" onChange={(e) => setpeso(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Años de vida: </label>
          <div>
            <input type="number" onChange={(e) => setaños(e.target.value)} />
          </div>
          <label>Temperamento: </label>
          <div>
            <input
              type="text"
              onChange={(e) => settemper(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label>Raza: </label>
          <div>
            <input
              type="text"
              onChange={(e) => setraza(e.target.value)}
            ></input>
          </div>
        </div>
        {/* <div>
                <label>Imagen(opcional)</label>
                    <div>
                        <input type="text" onChange={(e)=>setInput7(e.target.value)}></input>
                    </div>
                </div> */}
        <div className="btnCreate">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
