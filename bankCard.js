const bankCard = function (cash) {
  let pin = prompt('Set your pin')
  let balance = cash
  const testPin = function () {
    return prompt('Enter your pin') === pin
  }
  const testSum = function (sum) {
    if (sum <= 0) return console.log('invalid format sum')
    return sum <= balance
  }
  const getFromBalance = function (sum) {
    balance -= sum
    return sum
  }
  this.showBalance = function () {
    return testPin() ? balance : cosole.log('invalid pin')
  }
  this.getCash = function () {
    let sum = prompt('Enter your sum')
    if (!testPin()) return console.log('invalid pin')
    if (!testSum(sum)) return console.log('not enough money')
    return getFromBalance(sum)
  }
}

let card = new bankCard(10000)