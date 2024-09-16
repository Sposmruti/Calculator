// Get the input element
const input = document.querySelector('.input');

// Get all buttons
const buttons = document.querySelectorAll('.button');

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      // Clear the input field
      input.value = '';
    } else if (buttonText === '=') {
      // Evaluate the expression
      input.value = eval(input.value) || '';
    } else {
      // Append button text to input field
      input.value += buttonText;
    }
  });
});
