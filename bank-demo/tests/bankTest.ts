import Bank from "../src/bank";

//setup
const bank = new Bank();

// Create Account tests
// scenario 1
const account = bank.createAccount("Sukruth MS", 25, "2938298");
if (account.accountNumber === "2938298") {
    console.log("Create Account - Scenario 1 passed");
}
else {
    console.log("Create Account - Scenario 1 failed");
}

// scenario 2
try {
    bank.createAccount("Sukruth MS", 25, "2938298");
    console.log("Create Account - Scenario 2 failed");
}
catch (_) {
    console.log("Create Account - Scenario 2 passed");
}

// Deposit tests
// scenario 1
const newBalance = bank.deposit("2938298", 100);
if (newBalance == 100) {
    console.log("Deposit - Scenario 1 passed");
}
else {
    console.log("Deposit - Scenario 1 failed");
}

// scenario 2
try {
    bank.deposit("2938298", -50);
    console.log("Deposit - Scenario 2 failed");
}
catch (_) {
    console.log("Deposit - Scenario 2 passed");
}
