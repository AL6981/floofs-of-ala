import React from 'react';
import DogsContainer from './DogsContainer';
import CatsContainer from './CatsContainer';
import BugsContainer from './BugsContainer';

const App = props => {
  return(
    <div className = "app">
      <h1>Place Fluffballs here</h1>
      <DogsContainer 
        dogData = {props.data.dogs}
      />
      <CatsContainer 
        catData = {props.data.cats}
      />
      <BugsContainer 
        bugData = {props.data.bugs}
      />
    </div>
  )
}

export default App;
