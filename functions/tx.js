module.exports = (caver) => {
  const TX = {}

  TX.send = (val) => caver.klay.sendTransaction(val)

  TX.sign = (val, pk) => caver.klay.accounts.signTransaction(val, pk)

  return TX
}



