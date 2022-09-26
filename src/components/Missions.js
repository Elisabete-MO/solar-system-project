import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';

const headline = 'Missões';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
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
