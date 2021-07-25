import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../actions";
import "./About.css";

const About = (props) => {
  const dispatch = useDispatch();
  const stateDetail = useSelector((state) => state.dogsDetail);

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getDogDetail(id));
  }, []);

  return (
    <div>
      <div className="container">
        {stateDetail &&
          stateDetail.map((x) => (
            <div className="detailCtn" key={x.id}>
              <div className="detailName">
                <h3>{x.name} </h3>
              </div>
              <div className="detailTemp">
                <span>Temperamento: {x.temper}</span>
              </div>
              <div className="caracteristicas">
                <span>Altura: {x.altura}</span>
              </div>
              <div className="caracteristicas">
                <span>Peso: {x.peso}</span>
              </div>
              <div className="caracteristicas">
                <span>Años de vida: {x.años}</span>
              </div>
              <div className="imgDetailCtn">
                <img src={x.image} className="img" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;
