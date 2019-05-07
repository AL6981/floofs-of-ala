import React from 'react'

const PetTile = (props) => {
  //what do you have for props? DEBUGGGGGGGG
  return(
    <div className={ `tile ${props.className}` } onClick={props.handleClick}>
      <h3>{props.pet.name}</h3>
      <img src={props.pet.image}/>
      <h4>{props.pet.about}</h4>
      <h4>{props.pet.species}</h4>
    </div>
  )
}

export default PetTile
//the onClick handles the action for ONLY THIS ONE PET. Use a debugger or inspect to see the onClick parameter or class attribute.
