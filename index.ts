import { Wallet } from './classes/wallet';
import  { Chain } from './classes/blockchain';

// API
function transactMoney(from: Wallet, to: Wallet, amount: number) {
  from.sendMoney(amount, to.publicKey);
}

function getBalance(wallet: Wallet) {
  //TODO: get balance from blockchain
}

function mineBlock(hash: string) {
  // TODO: see if hash is valid

  // TODO: mine block
  
}

// Example usage
const sandvik = new Wallet('sandvik');
const bob = new Wallet('Bob');
const alice = new Wallet('Alice');

transactMoney(sandvik, bob, 100);
transactMoney(bob, alice, 50);
transactMoney(alice, sandvik, 25);

console.log(Chain.instance)

