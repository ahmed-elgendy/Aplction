// Yes, I added React just so I could get ES6
$('form').submit(function onSubmit(event) {
  event.preventDefault();
  var result = `Email: ${event.target.emailInput.value.trim()}\n`;
  result += `Password: ${event.target.passwordInput.value.trim()}\n`;
  result += `Full Name: ${event.target.nameInput.value.trim()}\n`;
  result += `Checkbox Checked: ${event.target.checkboxInput.checked.toString()}\n`;
  result += `Birthday: ${event.target.birthdayInput.value}\n`;
  result += `Maiden Name: ${event.target.maidenNameInput.value.trim()}\n`;
  $('.output').html(result);
});