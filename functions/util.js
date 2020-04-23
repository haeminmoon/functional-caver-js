module.exports = (caver) => {
  const UTIL = {}

  UTIL.toPeb = (amount) => caver.utils.toPeb(`${amount}`, 'KLAY');

  return UTIL
}