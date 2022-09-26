import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';

const headline = 'Planetas';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
      </div>
    );
  }
}

SolarSystem.defaultProps = {
  headline: ' ',
};

export default SolarSystem;
