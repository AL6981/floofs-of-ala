import React from 'react';

const PetTile = props => {
  return(
    <div onClick={props.handleClick} className={`tile ${props.className}`}>
      <h4>{props.name}</h4>
      <h5>{props.species}</h5>
      <h5>{props.about}</h5>
      <img width="300px;" src={props.image}/>
    </div>
  )
}

export default PetTile;
