Object.assign(global, require('fff-js'))

const { ACCOUNT, TX } = require('../index')
log(ACCOUNT)
/**
 * AccountKeyLegacy : 0x01
 * AccountKeyPublic : 0x02
 * AccountKeyFail : 0x03
 * AccountKeyWeightedMultiSig : 0x04
 * AccountKeyRoleBased : 0x05
 */


// Account update test key : 0x84f04b78667f547194c017567a5a8cc33e4f1d069a3a320c1ad58538a33ce130
// 0x65c325b87a97c4d9d834782fda48323078eda842

const privateKey = '0x84f04b78667f547194c017567a5a8cc33e4f1d069a3a320c1ad58538a33ce130'
const newKey = ACCOUNT.createPrivateKey();
log(newKey);

go(
  ACCOUNT.createSigner(privateKey),
  (account) => ACCOUNT.createAccountForUpdate(account, ACCOUNT.createPrivateKey()),
  log
)


// const accountUpdateTx = {
//   type: 'ACCOUNT_UPDATE',
//   from: account.address,
//   key,
//   gas: 50000,
//  }

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