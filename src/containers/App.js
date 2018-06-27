import React from 'react';
import PetsContainer from './PetsContainer';

const App = props => {
  return(
    <div className = "app">
      <h1>Place Pets here</h1>
      <PetsContainer
        data={props.data.pets}
      />
    </div>
  )
}

export default App;
