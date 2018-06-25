import React from 'react';
import PetTile from './PetTile';

class PetsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPet: null
    }
    this.resetPetSelection = this.resetPetSelection.bind(this)
  }

  resetPetSelection(pet) {
    this.setState({selectedPet: pet})
    console.log(this.state.selectedPet)
  }

  render() {
    let petArray = this.props.petData.map(pet => {

      let className;
      if (pet.id === this.state.selectedPet) {
        className = "selected"
      } else {
        className = ""
      }

      let handleClick = () => {
        this.resetPetSelection(pet.id)
      }

      return(
        <PetTile
          key = {pet.id}
          name = {pet.name}
          about = {pet.about}
          image = {pet.image}
          human = {pet.human}
          className = {className}
          handleClick = {handleClick}
        />
      )
    })

    return(
      <div className="container">
        {petArray}
      </div>
    )
  }
}

export default PetsContainer;
