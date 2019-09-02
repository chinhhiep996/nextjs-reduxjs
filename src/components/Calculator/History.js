import React from 'react';
import { Icon } from 'antd';

import './History.css';

const History = (props) => {
  return (
    <div className="history">
      <div className="history-trash"
        onClick={props.onClearHistory}
      >
        <Icon className="icon" type="delete" />
      </div>
      {
        props.history.map((expression, i) => {
          return (
            <div className="history-item" key={i}>
              <div className="expression">
                {expression.expression}&nbsp;=
              </div>
              <div className="result">
                {expression.result}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default History;
