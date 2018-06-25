import React from 'react';
import PetsContainer from './PetsContainer';

const App = props => {
  return(
    <div className = "app">
      <h1>Place Fluffballs here</h1>
      <PetsContainer
        petData = {props.data.pets}
      />
    </div>
  )
}

export default App;
