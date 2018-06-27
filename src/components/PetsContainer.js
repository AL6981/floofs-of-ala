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
    debugger
    console.log(`pet passed in w/key of ${pet}`)
    this.setState({selectedPet: pet})
  }

  render() {
    console.log(this.state.selectedPet)
    // console & debugger can read this.state inside render, outside an arrow function.
    debugger
    let petArray = this.props.petData.map(pet => {
      //we can console log state because arrow functions have access to "this", and we are still in ES6 inside our own code.
    console.log(this.state.selectedPet)
    debugger
      // once inside the browser via a debugger, we lose access to "this", which means this.state is not accessible
      //ES5 doesn't have arrow functions, it makes it a non-arrow function, which don't have access to "this"
      //in ES5 we had to set a variable == "this" in order to access it inside the function
      // this refers to whichever instance of the petcontainer we're referring to
      // need babel because the browsers have been slow to be able to read ES6
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
          key={pet.id}
          name={pet.name}
          about={pet.about}
          image={pet.image}
          human={pet.human}
          className={className}
          handleClick={handleClick}
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
