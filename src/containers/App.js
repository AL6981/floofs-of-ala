import React from 'react';
import PetContainer from './PetContainer';

const App = props => {
  return(
    <div className = "app">
      <h1>Place Pets here</h1>
      <PetContainer
        pets={props.data.pets}
      />
    </div>
  )
}

export default App;
