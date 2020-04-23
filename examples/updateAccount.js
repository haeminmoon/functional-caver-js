const { ACCOUNT, TX } = require('../index')

/**
 * AccountKeyLegacy : 0x01
 * AccountKeyPublic : 0x02
 * AccountKeyFail : 0x03
 * AccountKeyWeightedMultiSig : 0x04
 * AccountKeyRoleBased : 0x05
 */


// Account update test key : 0x84f04b78667f547194c017567a5a8cc33e4f1d069a3a320c1ad58538a33ce130
// 0x65c325b87a97c4d9d834782fda48323078eda842

// account key
// pk x : 0xeaa8a5a778dfe0e5f0ec50000adeebe9b13edc65ae14bc4e6324bee1771a8771
// address x : 0x76503ce393ea8a4ecd027ff0e675b4718878c4e6

// pk y : 0x82c59b7f7559b037872ffea923e3dc5be42580f8acdc1ad55ddda5b76c6f83a7
// address y : 0x389714d95d6c8b5413f5abf2cef012e7dc9c7e8f



const privateKey = '0xf79059119ee4b1a8f12267b77543342c3cffe53242ad5e1be922bef3866b82c5'
const newKey = ACCOUNT.createPrivateKey()

log(`newKey : ${newKey}` )

go(
  ACCOUNT.createSigner(privateKey),
  (account) => ACCOUNT.createAccountForUpdate(account.address, newKey),
  (key) => ({
    type: 'ACCOUNT_UPDATE',
    from: ACCOUNT.privateKeyToAccount(privateKey).address,
    key,
    gas: 50000,
  }),
  tx => TX.send(tx),
  log
)

// go(
//   ACCOUNT.getAccountKey(ACCOUNT.privateKeyToAccount(privateKey).address),
//   log
// )

// console.log(accountKey)
// console.log(`type: ${accountKey.type}`)
// console.log(`keys: ${accountKey.keys}`)
// console.log(`transactionKey: ${accountKey.transactionKey}`)
// console.log(`updateKey: ${accountKey.updateKey}`)
// console.log(`feePayerKey: ${accountKey.feePayerKey}`)

// go(
//   caver.klay.getAccountKey('0x47653c458d284fee4372b800db76aa6fe1d9d432'),
//   log
// )

/**
 * AccountKeyMultiSig
 */
// const privateKeyArray = [caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey]
// const accountKey = caver.klay.accounts.createAccountKey(privateKeyArray)

// console.log(accountKey)
// console.log(`type: ${accountKey.type}`)
// console.log(`keys: ${accountKey.keys}`)
// console.log(`transactionKey: ${accountKey.transactionKey}`)
// console.log(`updateKey: ${accountKey.updateKey}`)
// console.log(`feePayerKey: ${accountKey.feePayerKey}`)

/**
 * RoleBasedKey
 */
// const keyobject = {
//   transactionKey: [caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey],
//   updateKey: caver.klay.accounts.create().privateKey,
//   feePayerKey: [caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey, caver.klay.accounts.create().privateKey]
// }
// const accountKey = caver.klay.accounts.createAccountKey(keyobject)

// console.log(accountKey)
// console.log(`type: ${accountKey.type}`)
// console.log(`keys:`)
// console.log(accountKey.keys)
// console.log(`transactionKey: ${accountKey.transactionKey}`)
// console.log(`updateKey: ${accountKey.updateKey}`)
// console.log(`feePayerKey: ${accountKey.feePayerKey}`)