const assert = require('assert');
const operations = require('./operations')

describe ('base operations', () => {
  it ('правильно находит сумму 1 и 3', () => assert.equal(operations.mainFunc(1, 3, '+'), 4));
  it ('правильно находит сумму -1 и -1', () => assert.equal(operations.mainFunc(-1, -1, '+'), -2));
  it ('правильно находит разность 4 и 2', () => assert.equal(operations.mainFunc(4, 2, '-'), 2));
  it ('правильно находит произведение 7 и 9', () => assert.equal(operations.mainFunc(7, 9, '*'), 63));
  it ('правильно находит частное 6 и 2', () => assert.equal(operations.mainFunc(6, 2, '/'), 3));
});

describe ('validation arguments', () => {
  it ('ошибка: строка вместо числа', () => {
    assert.equal(operations.validationArguments('string', 3, '+'), false);
  });
  it ('ошибка: строки вместо чисел', () => {
    assert.equal(operations.validationArguments('string', 'string', '+'), false);
  });
  it ('успешно: введены два числа и оператор', () => {
    assert.equal(operations.validationArguments(5, 8, '+'), true);
  });
  it ('ошибка: введён неподходящий математический оператор', () => {
    assert.equal(operations.validationArguments(5, 8, '.'), false);
  });
});