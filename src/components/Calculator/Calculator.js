import React, { useState } from 'react';
import { Layout } from 'antd';

import './Calculator.css';
import MyHeader from '../MyHeader';
import Display from './Display';
import Control from './Control';
import Keypad from './Keypad';
import History from './History';
import Logic from './Logic';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleAdd = () => {
    Logic.add();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleClear = () => {
    Logic.clear();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleClearAll = () => {
    Logic.clearAll();

    setExpression(Logic.getExpression());
    setHistory(Logic.getHistory());
    setValue(Logic.getValue().toString());
  }

  const handleClearHistory = () => {
    Logic.clearHistory();

    setHistory(Logic.getHistory());
    setShowHistory(false);
  }

  const handlePoint = () => {
    Logic.inputDecimal();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleDelete = () => {
    Logic.delete();

    setValue(Logic.getValue().toString());
  }

  const handleDigit = (number) => {
    Logic.inputDigit(number);

    setValue(Logic.getValue());
  }

  const handleDivide = () => {
    Logic.divide();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleEquals = () => {
    Logic.equals();

    setExpression(Logic.getExpression());
    setValue(Logic.getResult().toString());
    setHistory(Logic.getHistory());
  }

  const handleMultiply = () => {
    Logic.multiply();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleSubtract = () => {
    Logic.subtract();

    setExpression(Logic.getExpression());
    setValue(Logic.getValue().toString());
  }

  const handleToggleHistory = () => {
    setShowHistory(prevState => (!prevState));
  }

  const handleToggleSign = () => {
    Logic.toggleSign();

    setValue(Logic.getValue().toString());
  }

  return (
    <Layout className="layout">
      <MyHeader title="React Calculator" typeIcon="calculator" />
      <div className="calculator">
        <Display value={value} expression={expression} />
        <Control anyHistory={history.length > 0}
          onToggleHistory={handleToggleHistory}
          onClearHistory={handleClearHistory}
        />
        {
          !showHistory && <Keypad onDigit={handleDigit}
            onAdd={handleAdd}
            onSubtract={handleSubtract}
            onDivide={handleDivide}
            onMultiply={handleMultiply}
            onEquals={handleEquals}
            onPoint={handlePoint}
            onClear={handleClear}
            onClearAll={handleClearAll}
            onDelete={handleDelete}
            onToggleSign={handleToggleSign}
          />
        }
        {
          showHistory && <History history={history}
            onClearHistory={handleClearHistory}
          />
        }
      </div>
    </Layout>
  );
}

export default Calculator;
