import React from 'react';
import DogTile from './DogTile';

const DogsContainer = props => {
  let dogArray = props.dogData.map(dog => {
    return(
      <DogTile
        key = {dog.id}
        name = {dog.name}
        breed = {dog.breed}
        image = {dog.image}
        human = {dog.human}
      />
    )
  })

  return(
    <div className="container">
      {dogArray}
    </div>
  )
}

export default DogsContainer;