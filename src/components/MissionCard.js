import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { key, name, year, country, destination } = this.props;
    return (
      <div key={ key } data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  key: ' ',
  name: ' ',
  year: ' ',
  country: ' ',
  destination: ' ',
};

MissionCard.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
