function Card () {
  var pin = prompt('Set your pin')
  var cash = prompt('Your account balance')

  function testPin () {
    return prompt('Enter your pin') === pin 
  }

  function testSum () {
    var sum = parseFloat(prompt('Enter your sum')) || 0
    return sum > 0 ? sum : console.error('Wrong amount format')
  }

   this.showMoney = function () {
    return testPin() ? cash : console.error('Invalide pin')
  }

  this.getCash = function () {
    if (!testPin()) return console.error('Invalide pid')
    var sum = testSum()
    if (typeof sum !== 'number') return
    if (sum <= cash) {
      cash -= sum
      console.log(sum)
    } else {
      console.error('Not enough money ')
    }
  }
}

const card1 = new Card()