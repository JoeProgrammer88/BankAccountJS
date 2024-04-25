/**
 * Class representing a bank account.
 */
class BankAccount {
    /**
     * Create a bank account.
     * @param {string} accountNumber - The account number.
     * @param {string} ownerName - The name of the account owner.
     */
    constructor(accountNumber, ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.accountBalance = 0; // Account balance defaults to 0
    }

    /**
     * Deposit money into the account.
     * @param {number} amount - The amount to deposit.
     */
    deposit(amount) {
        this.accountBalance += amount;
        console.log(`Deposited ${amount}. Current balance: ${this.accountBalance}`);

        this.updateBalance(this.accountBalance);
    }

    /**
     * Withdraw money from the account.
     * @param {number} amount - The amount to withdraw.
     */
    withdraw(amount) {
        if (amount > this.accountBalance) {
            console.log('Insufficient balance');
        } else {
            this.accountBalance -= amount;
            console.log(`Withdrew ${amount}. Current balance: ${this.accountBalance}`);

            this.updateBalance(this.accountBalance);
        }
    }

    updateBalance(balance) {
        this.accountBalance = balance;

        // format balance as currency
        balance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance);

        let balanceHeading = document.getElementById('balance');
        balanceHeading.textContent = `Current balance: ${balance}`;
    }

    /**
     * Check the current balance of the account.
     */
    checkBalance() {
        console.log(`Current balance: ${this.accountBalance}`);
    }
}

window.onload = function() {
    let account = new BankAccount('123456789', 'John Doe');

    // Get deposit button set up
    let depositButton = document.getElementById('deposit');
    depositButton.addEventListener('click', function() {
        let depositAmount = document.getElementById('amount').value;
        account.deposit(parseInt(depositAmount));
    });

    // Get withdraw button set up
    let withdrawButton = document.getElementById('withdraw');
    withdrawButton.addEventListener('click', function() {
        let withdrawAmount = document.getElementById('amount').value;
        account.withdraw(parseInt(withdrawAmount));
    });
}