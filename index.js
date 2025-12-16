/*This JavaScript object simulates an ATM account by storing
 account data and using methods to deposit, withdraw, check balance,
 and track the last transaction. */

let atmAccount = {
    amount: 1000,
    owner: "sunny",
    lastTransaction: null, // new property to store last transaction

    addDeposit: function () {
        let deposit = Number(prompt("Enter the amount:"));

        if (deposit <= 0) {
            alert("ENTER A VALID NUMBER");
            return;
        }

        this.amount += deposit;
        this.lastTransaction = `Deposited: ${deposit}`;
        console.log(`Deposited: ${deposit}, New balance: ${this.amount}`);
        return deposit;
    },

    remMoney: function () {
        let withdraw = Number(prompt("Enter amount to withdraw"));

        if (withdraw <= 0) {
            alert("INVALID VALUE");
            return;
        }

        if (withdraw > this.amount) {
            alert("INSUFFICIENT FUNDS");
            return;
        }

        this.amount -= withdraw;
        this.lastTransaction = `Withdrawn: ${withdraw}`;
        alert(`Your account has withdrawn ${withdraw}`);
        return withdraw;
    },

    balance: function () {
        alert(`Your current balance is ${this.amount}`);
        return this.amount;
    },

    showLastTransaction: function () {
        if (this.lastTransaction) {
            alert(`Last transaction: ${this.lastTransaction}`);
        } else {
            alert("No transactions have been made yet.");
        }
    }
};

console.table(atmAccount);
/*
1. Objects in JavaScript store related data and functions together.
2. Properties store values (amount, owner, lastTransaction).
3. Methods are functions inside an object (addDeposit, remMoney, balance).
4. `this` refers to the current object and is used to access its properties.
5. User input is taken using `prompt()` and converted to numbers.
6. Conditions (`if`) are used to validate input and prevent errors.
7. The object updates existing values instead of creating new ones.
8. `lastTransaction` keeps track of the most recent action.
9. `alert()` and `console.log()` are used for output.
10. `console.table()` displays object data in a readable table format.

*/