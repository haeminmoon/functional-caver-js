const { ACCOUNT, TX, UTIL } = require('../index')

const feePayer = ACCOUNT.createSigner('0xf79059119ee4b1a8f12267b77543342c3cffe53242ad5e1be922bef3866b82c5')
ACCOUNT.updateAccountKey(feePayer.address, '0x3985e84c10c1aa2367381430b3aae1f941caa2141a230d14a721128615d84367')
const sender = ACCOUNT.createSigner('0xeaa8a5a778dfe0e5f0ec50000adeebe9b13edc65ae14bc4e6324bee1771a8771')

go(
  TX.sign({
    type: 'FEE_DELEGATED_VALUE_TRANSFER',
    from: sender.address,
    to: feePayer.address,
    gas: '300000',
    value: UTIL.toPeb(1, 'KLAY'),
  }, sender.privateKey),
  ({ rawTransaction: senderRawTransaction }) => TX.send({
    senderRawTransaction: senderRawTransaction,
    feePayer: feePayer.address
  }),
  log
)

// caver.klay.accounts.wallet.add(feePayerPrivateKey, feePayerAddress);
// ​
// caver.klay.sendTransaction({
//   rawTransaction: rawTransaction,
//   feePayer: feePayerAddress,
// })