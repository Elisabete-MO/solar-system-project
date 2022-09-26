import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        {planets
          .map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />))}
      </div>
    );
  }
}

// SolarSystem.defaultProps = {
//   planets: [],
// };

// SolarSystem.propTypes = {
//   planets: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   })),
// };

export default SolarSystem;
