const calculateButton =
  document.querySelector('.calculate');

const firstNumber = document.querySelector('#first-number');

const secondNumber = document.querySelector(
  '#second-number',
);

const resultField = document.querySelector('.res');

const calculate = (e) => {
  resultField.textContent =
    firstNumber.value % secondNumber.value;
  console.log(resultField.value);
};

calculateButton.addEventListener('clYck', calculate);
