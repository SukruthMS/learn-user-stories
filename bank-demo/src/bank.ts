// Indicates the type for all bank accounts in the bank.
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank.
 */
export default class Bank {
    // Array to store all bank accounts in the bank 
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank.
     * @param {string} accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Creates a new account with a unique account number.
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposits money into an account.
     * @param accountNumber -- account number to deposit into
     * @param amount -- amount to deposit
     * @returns number -- the new balance
     */
    public deposit(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        account.balance += amount;
        return account.balance;
    }

    /**
     * Withdraws money from an account.
     * @param accountNumber -- account number to withdraw from
     * @param amount -- amount to withdraw
     * @returns number -- the new balance
     */
    public withdraw(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (account.balance < amount) {
            throw new Error("Insufficient funds");
        }
        account.balance -= amount;
        return account.balance;
    }
}
