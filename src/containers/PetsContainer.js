import React from 'react';
import PetTile from '../components/PetTile';

class PetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPet: null
    }
  }

  requestSelectedPet(pet){
    this.setState({selectedPet: pet})
  }

  render(){

    let petsArray = this.props.data.map(pet => {

      handleClick(pet.id){
        this.requestSelectedPet(pet.id)
      }

      return(
        <PetTile
          key={pet.id}
          name={pet.name}
          species={pet.species}
          about={pet.about}
          image={pet.image}
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

export default PetsContainer;
