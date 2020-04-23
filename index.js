Object.assign(global, require('fff-js'))

const caver = require('./config')('baobab')

const ACCOUNT = require('./functions/account')(caver);
const TX = require('./functions/tx')(caver);
const UTIL = require('./functions/util')(caver);

module.exports = {
  ACCOUNT, TX, UTIL
}