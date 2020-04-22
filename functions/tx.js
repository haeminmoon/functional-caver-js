module.exports = (caver) => {
  const TX = {}

  TX.send = (val) => caver.klay.sendTransaction(val)

  return TX
}



