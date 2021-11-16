var BankCard = function (cash) {
  var balance = cash
  var testPin = (function (pin) {
    return prompt('Enter Your Pincode') === pin
  }) (prompt('Set Your Pincode'))
  var testSum = (function (sum) {
    return sum <= balance
  }) ()
  var getFromBalance = function (sum) {
    balance -= sum
    return sum
  }
  this.showBalance = function () {
    return testPin ? balance : 'invalid pin'
  }
  this.getCash = function () {
    var sum = prompt('enter the sum')
    if (!testPin) return console.error('invalid pin')
    if (!testSum) return console.error('not enough money')
    return getFromBalance(sum)
  }
}

var card = new BankCard(10000)