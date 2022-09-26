import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCards from './MissionCard';

const headline = 'Missões';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
        {missions
          .map((missao) => (
            <MissionCards
              key={ missao.name }
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />))}

      </div>
    );
  }
}

// Missions.defaultProps = {
//   headline: ' ',
// };

// Missions.propTypes = {
//   headline: PropTypes.string,
// };

export default Missions;
