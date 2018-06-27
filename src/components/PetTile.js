import React from 'react';

const PetTile = props => {
  return(
    <div className="tile" onClick={props.handleClick}>
      <h4>{props.name}</h4>
      <h5>{props.species}</h5>
      <h5>{props.about}</h5>
      <img width="400px;" src={props.image}/>
    </div>
  )
}

export default PetTile;
