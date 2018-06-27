import React from 'react';
import PetTile from '../components/PetTile';

class PetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPet: null
    }
    this.selectPet = this.selectPet.bind(this)
  }

  selectPet(pet){
    this.setState({selectedPet: pet})
  }

  render(){

    let petsArray = this.props.data.map(pet => {

      let handleClick = () => {
        this.selectPet(pet.id)
      }

      return(
        <PetTile
          key={pet.id}
          name={pet.name}
          species={pet.species}
          about={pet.about}
          image={pet.image}
          handleClick={handleClick}
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
