import React from 'react';

const DogTile = props => {
  return(
    <div className="tile">
      <h4>{props.name}</h4>
      <h5>{props.breed}</h5>
      <h5>{props.human}</h5>
      <img width="200px" src={props.image} />
    </div>
  )
}

export default DogTile;