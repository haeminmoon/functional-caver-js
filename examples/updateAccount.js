const { ACCOUNT, TX } = require('../index')

/**
 * AccountKeyLegacy : 0x01
 * AccountKeyPublic : 0x02
 * AccountKeyFail : 0x03
 * AccountKeyWeightedMultiSig : 0x04
 * AccountKeyRoleBased : 0x05
 */

const targetAccount = ACCOUNT.createSigner('0x58ea816491767d7b4168a221f6a13d6011fb13cc273e6365de70081aa948798d')
const newKey = ACCOUNT.createPrivateKey()

const updateAccount = pipe(
  ACCOUNT.createAccountForUpdate,
  ({ targetAccount, accountForUpdate }) => ({
    type: 'ACCOUNT_UPDATE',
    from: targetAccount.address,
    accountForUpdate,
    gas: 50000,
  }),
  TX.send
)

// Excution
go(
  updateAccount(targetAccount.address, newKey),
  log
)