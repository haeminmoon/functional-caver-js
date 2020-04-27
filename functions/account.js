module.exports = (caver) => {
  const ACCOUNT = {}

  /**
   * @description Get account object using private key
   * @param { String } privateKey  
   * @return { Object } Account object
   */
  ACCOUNT.privateKeyToAccount = (privateKey) => caver.klay.accounts.privateKeyToAccount(privateKey)

  /**
   * @description Connect account to wallet
   * @param { Object } account  
   * @return { Object } Signed account object
   */
  ACCOUNT.addWallet = (privateKey) => caver.klay.accounts.wallet.add(privateKey)

  ACCOUNT.removeWallet = (account) => caver.klay.accounts.wallet.remove(account)

  /**
   * @description Create private key
   * @return { String } Private key
   */
  ACCOUNT.createPrivateKey = _ => caver.klay.accounts.create().keys;

  /**
   * @description Create AccountForUpdate Object
   * @param { Object, String } account, privateKey  
   * @return { Object } AccountForUpdate object
   * {
   *  address: '0x...',
   *  keyForUpdate: {
   *    publicKey: '0x...'
   *  }
   * }
   */
  ACCOUNT.createAccountForUpdate = (account, key) => ({ 
    targetAccount : account,
    accountForUpdate : caver.klay.accounts.createAccountForUpdate(account.address, key)
  })

  /**
   * @description Create signed account
   * @param { Object } account
   * @param_mock
   *  {
   *    address: 0x... ,
   *    private_key: 0x... 
   *  }...
   * @return { Object } Signer
   */
  ACCOUNT.createSigner = pipe(ACCOUNT.privateKeyToAccount, ACCOUNT.addWallet)

  ACCOUNT.getAccountKey = (address) => caver.klay.getAccountKey(address)

  ACCOUNT.updateAccountKey = (address, key) => caver.klay.accounts.wallet.updateAccountKey(address, key)

  return ACCOUNT
}