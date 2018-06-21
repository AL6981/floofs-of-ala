import React from 'react';
import BugTile from './BugTile';

const BugsContainer = props => {
  let bugArray = props.bugData.map(bug => {
    return(
      <BugTile
        key = {bug.id}
        name = {bug.name}
        species = {bug.species}
        personality = {bug.personality}
        image = {bug.image}
      />
    )
  })
  return (
    <div className="container">
      {bugArray}
    </div>
  )
}

export default BugsContainer;