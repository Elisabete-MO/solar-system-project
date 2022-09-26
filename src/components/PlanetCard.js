import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { key, planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img key={ key } src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  key: ' ',
  planetName: ' ',
  planetImage: ' ',
};

PlanetCard.propTypes = {
  key: PropTypes.string,
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
