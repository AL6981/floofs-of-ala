import React from 'react';
import PetTile from '../components/PetTile';

class PetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedPet: null
    }
    this.selectPet=this.selectPet.bind(this)
    //^attaches the selectPet method to THIS PetContainer. It will be clicked inside a PetTile, so it needs to know where to do its job. It's here! In PetContainer. THIS ONE.
  }

  selectPet(petId){
    //handles the logic for what state should be. Is a pet selected, or is it null?
    if (this.state.selectedPet === petId){
      this.setState({selectedPet: null})
    } else {
      this.setState({selectedPet: petId})
    }
  }

  render(){

    let petsArray = this.props.pets.map(pet => {
//here we map over this.props.pets and generate a PetTile for EACH OF MY PETS

      let handleClick = () => {
        this.selectPet(pet.id)
      }
//each pet gets its own version of selectPet that holds onto the id of that pet.

      let className;
      if (pet.id === this.state.selectedPet){
        className="selected"
      }
//if state is NOT null and it IS this particular pet, then the className is selected, otherwise it will just show up as tile undefined.

      return(
        <PetTile
          key={pet.id}
          pet={pet}
          handleClick={handleClick}
          className={className}
        />
      )
      //one PetTile per pet in the array!
    })

    return(
      <div className="container">
        {petsArray}
      </div>
    )
    //this petsArray returns the whole array of PET TILES
  }
}

export default PetContainer;
