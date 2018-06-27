import React from 'react';
import PetTile from '../components/PetTile';

class PetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedPet: null
    }
    this.selectPet=this.selectPet.bind(this)
  }

  selectPet(pet){
    if (this.state.selectedPet === pet){
      this.setState({selectedPet: null})
    } else {
      this.setState({selectedPet: pet})
    }
  }

  render(){

    let petsArray = this.props.pets.map(pet => {

      let handleClick = () => {
        this.selectPet(pet.id)
      }

      let className;
      if (pet.id === this.state.selectedPet){
        className="selected"
      }

      return(
        <PetTile
          key={pet.id}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          about={pet.about}
          image={pet.image}
          handleClick={handleClick}
          className={className}
        />
      )
    })

    return(
      <div className="container">
        {petsArray}
      </div>
    )
  }
}

export default PetContainer;
