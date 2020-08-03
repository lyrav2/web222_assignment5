var questions = document.getElementById('question');
var comments = document.getElementById('comments');
var order = document.getElementById('order');
var orderidform = document.getElementById('orderform');
var radios = document.querySelector('input[name = "typeof"]:checked');

function showInput() {
  orderidform.classList.remove('hidden');
}
function hideInput() {
  orderidform.classList.add('hidden');
}

if (radios !== null) {
  if (radios.value === 'question' || radios.value === 'comments') {
    hideInput();
  } else if (radios.value === 'order') {
    showInput();
  }
}
