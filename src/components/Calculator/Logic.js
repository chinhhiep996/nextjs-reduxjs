const math = require('mathjs');

let currentValue = '';
let display = [];
let history = [];
let result = '';

const Logic = {
  inputDigit(digit) {
    if (isNaN(digit)) {
      throw Error('Only numeric input is allowed');
    }

    if (result !== '') {
      result = '';
      currentValue = '';
    }

    currentValue += digit;
  },

  inputDecimal() {
    if (result !== '') {
      result = '';
      currentValue = '';
    }

    if (currentValue.indexOf('.') >= 0) {
      return;
    }

    if (currentValue === '') {
      currentValue += '0.';
    } else {
      currentValue += '.';
    }
  },

  clear() {
    currentValue = '';
    display = [];
    result = '';
  },

  clearAll() {
    currentValue = '';
    display = [];
    result = '';
    history = [];
  },

  clearHistory() {
    history = [];
  },

  delete() {
    if (currentValue === '') {
      return;
    }

    currentValue = currentValue.substring(0, currentValue.length - 1);
  },

  add() {
    if (currentValue === '') {
      return;
    }

    display.push(currentValue);
    display.push('+');

    currentValue = '';
  },

  subtract() {
    if (currentValue === '') {
      return;
    }

    display.push(currentValue);
    display.push('-');

    currentValue = '';
  },

  multiply() {
    if (currentValue === '') {
      return;
    }

    display.push(currentValue);
    display.push('*');

    currentValue = '';
  },

  divide() {
    if (currentValue === '') {
      return;
    }

    display.push(currentValue);
    display.push('/');

    currentValue = '';
  },

  equals() {
    if (currentValue === '') {
      return;
    }

    display.push(currentValue);

    const expression = display.join(' ');
    result = math.evaluate(expression);
    currentValue = result.toString();
    history.splice(0, 0, { expression, result });
    display = [];
  },

  toggleSign() {
    currentValue = (parseFloat(currentValue) * (-1)).toString();
  },

  getValue() {
    return currentValue;
  },

  getExpression() {
    return display.join(' ');
  },

  getHistory() {
    return history;
  },

  getResult() {
    return result;
  }

}

export default Logic;
