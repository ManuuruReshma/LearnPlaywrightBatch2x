class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let pramod = new ICICI("pramd", 1000);
console.log(pramod.getBalance());
pramod.setBalance(100000, false);
console.log(pramod.getBalance());

let pramod_father = new ICICI("pramdf", 2000);
console.log(pramod_father.getBalance());
pramod_father.setBalance(300000, true);
console.log(pramod_father.getBalance())