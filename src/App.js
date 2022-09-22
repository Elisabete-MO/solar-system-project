import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

// const headline = 'xyz';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title>
          headline
        </Title>
      </>
    );
  }
}

export default App;
