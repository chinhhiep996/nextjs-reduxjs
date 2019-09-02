import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'antd';

import './Control.css';

const Control = (props) => {
  return (
    <div className="control">
      <Button className="button"
        disabled={!props.anyHistory}
        onClick={props.onToggleHistory}
      >
        <Icon type="history" className="icon" />
      </Button>
    </div>
  );
}

Control.propTypes = {
  anyHistory: PropTypes.bool,
  onToggleHistory: PropTypes.func
};

export default Control;
