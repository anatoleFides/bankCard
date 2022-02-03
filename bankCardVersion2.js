function Card () {
  let pin = prompt('Set your pin')
  let cash = prompt('Your account balance')

  function testPin () {
    return prompt('Enter your pin') === pin 
  }

  function testSum () {
    const sum = parseFloat(prompt('Enter your sum')) || 0
    return sum > 0 ? sum : console.error('Wrong amount')
  }

   this.showMoney = function () {
    return testPin() ? cash : console.error('Invalide pin')
  }

  this.getCash = function () {
    if (!testPin()) return console.error('Invalide pid')
    const sum = testSum()
    if (sum <= cash) {
      cash -= sum
      console.log(sum)
    } else {
      console.log('Not enough money ')
    }
  }
}

const card1 = new Card()