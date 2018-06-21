import React from 'react';
import CatTile from './CatTile';

const CatsContainer = props => {
  let catArray = props.catData.map(cat => {
    return(
      <CatTile
        key = {cat.id}
        name = {cat.name}
        personality = {cat.personality}
        human = {cat.human}
        image = {cat.image}
      />
    )
  })
  return (
    <div className="container">
      {catArray}
    </div>
  )
}

export default CatsContainer;