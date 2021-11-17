// Lender class
import { Transaction } from './transaction';
export class Lender {

    public lender: Transaction[];
    public limit = 5;

    constructor(miner: string) {
        this.lender = [
          // Reward to miner
          new Transaction(100, 'genesis', miner)
        ];
      }

      addTransaction(transaction: Transaction) {
        if(!this.transactionLimit()) {
          this.lender.push(transaction);
          return true;
        }
        return false;
      }

      transactionLimit() {
        return (this.lender.length == this.limit);
      }
}