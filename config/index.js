const Caver = require('caver-js')

module.exports = (network) => new Caver(`https://api.${network}.klaytn.net:8651`)