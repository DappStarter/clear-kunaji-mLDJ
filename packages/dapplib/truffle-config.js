require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone stove rival ridge coil hard light army genre'; 
let testAccounts = [
"0x85f6f98fc3d29d7e7a4eb8a892a96bc9bc820b384792d683f1f7430349222244",
"0xf59d506cda86dcd2cc6da6e3f1b04fd685dde5713dccff541a19d640acf6a84b",
"0x51a5b16d004c14e1ad958c0353d1fa5dd69c3fb7330ca32d2b62d785328082db",
"0x0c9c9cfa39e5f5f7d9feeb2b4e758a8692a0b61bea06dd0875ebfdec47ef6111",
"0xed88b415485575636509f81f263e237f54d17ad459c6abf477f512c278072344",
"0xe28aa5fa28af52a3cd4166ad690aee997bb5b62ebbfe40f88090693b650594f6",
"0xda6bdde3091e07783936e9ff42aa627e1779df1de91f799cdb797150fa0d251a",
"0x9feb208ca03b2200d8a0c752b0a73def817c0a96b841eeb2cb1b4dd5e5507ee7",
"0xe5e03847407d9a986f7c31cb34e9cc1fb93ef89724c65878b665b1f42649543d",
"0xc1dbee6129ce18f359b6afc65b52feef72f86d7cad67dede08549a00817bef55"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


