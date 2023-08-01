/* const { TestWatcher } = require("jest");
 */
const validator = {
  // function para mascarar o número do cartão.
  // inspeciona se o número do cartão tem  ou é inferior a 4 dígitos. Nesse caso, ele retorna o número sem a mask.
  maskify: function (cc) {
    if (cc.length <= 4) {
      return cc;
    }
    const lastFourDigits = cc.slice(-4); // fatia os 4 dígitos finais do número do cartão.
    const masked = cc.slice(0, -4).replace(/./g, "#"); // gera uma string com máscara, substituindo todos os dígitos, com excessão dos últimos 4, por "#".
    return masked + lastFourDigits; // retorna a string cifrada com mask reunida com os 4 dígitos finais.
  },

  // function para validar o cartão de crédito através do algorítmo de Luhn.
  isValid: function (cardNumber) {
    // analisa se o número do card está vazio ou se está fora do intervalo válido de comprimento (de 13 a 16 dígitos). Nessas condições, retorna false.
 
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    //retorna true caso o resultado da soma seja divisível por 10 e false se não for.
    return sum % 10 === 0;
  },
  
};

export default validator;

// const validator = {
// ...
//};

//export default validator;

//aqui você deve implementar o objeto validator, o qual já está exportado no boilerplate. Este objeto (validator) deve conter dois métodos:

// validator.isValid(creditCardNumber): creditCardNumber é um string com o número do cartão a ser verificado. Esta função deve retornar um boolean, dependendo de sua validade, de acordo com o algoritmo de Luhn.

// validator.maskify(creditCardNumber): creditCardNumber é um string com o número do cartão e esta função deve retornar um string onde todos, exceto os últimos quatro caracteres, são substituídos por um número (#) ou 🐱. Essa função deve sempre manter os quatro últimos caracteres intactos, mesmo quando o string for mais curto.

// Exemplo de uso:

// maskify('4556364607935616') === '############5616'
// maskify(     '64607935616') ===      '#######5616'
// maskify(               '1') ===                '1'
// maskify(               '')  ===                '' 