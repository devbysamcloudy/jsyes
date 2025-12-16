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
