Object.assign(global, require('fff-js'))

const caver = require('./config')('baobab')

const ACCOUNT = require('./functions/account')(caver);
const TX = require('./functions/tx')(caver);

module.exports = {
  ACCOUNT, TX
}