const mainFunc = (a, b, operator) => {
  const obj = {
    '+': () => (+a) + (+b),
    '-': () => (+a) - (+b),
    '*': () => (+a) * (+b),
    '/': () => (+a) / (+b),
  }

  return obj[operator](a, b);
}

const validationArguments = (x, y, z) => {
  regexp = /[+\-*\/]/
  if ((isNaN(x) || isNaN(y)) || !regexp.test(z)) {
    return false;
  }
  return true;
}

module.exports = { mainFunc, validationArguments }