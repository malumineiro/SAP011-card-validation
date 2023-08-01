import validator from './validator.js';  
 

// function que faz rodar o resultado da função e o número mascarado na pág do HTML.
//quando o usuário preencher o campo de número de identificação do cartão, imediatamente aparecerá no formulário de cima a atualização com o número do cartão mascarado e a validação do cartão.

function updateCardInfo() {
  const cardNumber = document.getElementById('cardNumber').value;
  const maskedNumber = validator.maskify(cardNumber);
  const isValid = validator.isValid(cardNumber);
 
  // reune todos os inputs type text.
  const inputs = document.querySelectorAll('input[type="text"]');

  // add um listener de event de entrada para cada input.
  inputs.forEach(input => {
    input.addEventListener('input', () => {

      // substitui os caracteres não numéricos.
      input.value = input.value.replace(/\D/g, '');
    });
  }); 
 
  

  if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 16) {
    return false;
  }


  document.getElementById('result').innerHTML = ` 4 últimos dígitos: </br>
    <nav class="card-masked">${maskedNumber}</nav>
    <nav class="card-validity">${isValid ? 'Cartão VÁLIDO! Podemos prosseguir com o pedido...' : 'Cartão INVÁLIDO'}</nav>
    `;

  cardNumberInput = ''; // faz a limpa no input.
  
}

// add event listeners para o número do cartão -input field/faz a invocação.
let cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', updateCardInfo);



// console.log(validator); 

// aqui você deve escutar os eventos de DOM, chamar validator.isValid() e validator.maskify().


