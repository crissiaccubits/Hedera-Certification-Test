const {
    Client,
    AccountBalanceQuery,
    TransferTransaction,
    Hbar
} = require("@hashgraph/sdk");
require("dotenv").config();

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;

// const myAccountId = "put your account ID here";
// const myPrivateKey = "put your private key here";

const otherAccountId = process.env.OTHER_ACCOUNT_ID;

async function main() {
    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this really easy!
    const client = Client.forTestnet();

    client.setOperator(myAccountId, myPrivateKey);

    // Create the transfer transaction
    const transaction = new TransferTransaction()
    .addHbarTransfer(myAccountId, new Hbar(-50))
    .addHbarTransfer(otherAccountId, new Hbar(50));
    
    console.log(`Doing transfer from ${myAccountId} to ${otherAccountId}`);
    
    // Sign with the client operator key and submit the transaction to a Hedera network
    const txId = await transaction.execute(client);

    // console.log(JSON.stringify(txId));

    // Request the receipt of the transaction
    const receipt = await txId.getReceipt(client);

    // console.log(JSON.stringify(receipt));

    // Get the transaction consensus status
    const transactionStatus = receipt.status;

    console.log("The transaction consensus status is " + transactionStatus);

    // Create the queries
    const queryMine = new AccountBalanceQuery().setAccountId(myAccountId);
    const queryOther = new AccountBalanceQuery().setAccountId(otherAccountId);

    const accountBalanceMine = await queryMine.execute(client);
    const accountBalanceOther = await queryOther.execute(client);

    console.log(`My account balance ${accountBalanceMine.hbars} HBar, other account balance ${accountBalanceOther.hbars}`);
}

main();
