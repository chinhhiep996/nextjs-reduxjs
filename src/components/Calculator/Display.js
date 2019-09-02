import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = (props) => {
  return (
    <div className="cal-display">
      <h4 className="cal-expression">
        {props.expression}
      </h4>
      <h1 className="cal-value">
        {props.value}
      </h1>
    </div>
  );
}

Display.defaultProps = {
  expression: '',
  value: '0'
};

Display.propTypes = {
  expression: PropTypes.string,
  value: PropTypes.string
};

export default Display;
