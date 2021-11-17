import * as crypto from 'crypto';
import { Transaction } from './transaction';

// Individual block on the chain
export class Block {
    //TODO: block should have a lender of the transactions. As opposed to one transaction per block

    public nonce = Math.round(Math.random() * 999999999);
  
    constructor(
      public prevHash: string, 
      public transaction: Transaction, 
      public ts = Date.now()
    ) {}
  
    get hash() {
      const str = JSON.stringify(this);
      const hash = crypto.createHash('SHA256');
      hash.update(str).end();
      return hash.digest('hex');
    }
}