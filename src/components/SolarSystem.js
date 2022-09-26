import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const headline = 'Planetas';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
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
//   // headline: ' ',
//   planets: [],
// };

// SolarSystem.propTypes = {
//   // headline: PropTypes.string,
//   planets: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   })),
// };

export default SolarSystem;
