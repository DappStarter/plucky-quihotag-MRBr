require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name reward stick code hunt perfect flush giggle'; 
let testAccounts = [
"0x149dcf05c39afa8ef7bf592b9a30d3c97755ff838717d72180db9d337476be60",
"0x343d41e9fa272ac901d42704e3dcb247765245dad0e3a4ba2d240ddfa8d236bf",
"0x20bda8d45c4a71c32fd7a3e8f4be4122852cac7d1426fef6c4c71f19b53a10d4",
"0x06d105c223a75edb1edad58d0a1be3be40d074a63c1a3a4c7f228d8ff69bc2ae",
"0xf994e2583131b48bbaf999efa64a1da1cb4f8c065ec6c32ac2f9aa188dbccd8e",
"0x2077fd38f7448588733d5b5f814cfec7190109c8e9da989ec8d3f83d8cad2ac1",
"0x78586a705a7c7a9d284d18a4af64c83360af5e131a11984d68ed0dfd12b1ff0e",
"0xe4d51f1d55cfefc25fe4e2c3266d46a8a12a39ca0c8bc190872d4f8cca15d2dc",
"0x694e4cf3dc7ce3b85555168b3e4a685a85733b3e7dab8c4717633c80283a720c",
"0xf62bd4f43b712f909f6886b82bea75746d29e341b8b732ef41308c85515d4e22"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

