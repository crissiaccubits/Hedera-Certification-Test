const {
    Client,
    AccountBalanceQuery, PrivateKey, Wallet
} = require("@hashgraph/sdk");
require('dotenv').config({ path: '.env' });

const myAccountId = process.env.FIRST_ACCOUNT_ID;
const myPrivateKey = PrivateKey.fromString(process.env.FIRST_PRIVATE_KEY);

const secondAccountId = process.env.SECOND_ACCOUNT_ID;
const secondPrivateKey = PrivateKey.fromString(process.env.SECOND_PRIVATE_KEY);

const thirdAccountId = process.env.THIRD_ACCOUNT_ID;
const thirdPrivateKey = PrivateKey.fromString(process.env.THIRD_PRIVATE_KEY);

const fourthAccountId = process.env.FOURTH_ACCOUNT_ID;
const fourthPrivateKey = PrivateKey.fromString(process.env.FOURTH_PRIVATE_KEY);

const fifthAccountId = process.env.FIFTH_ACCOUNT_ID;
const fifthPrivateKey = PrivateKey.fromString(process.env.FIFTH_PRIVATE_KEY);

const tokenId = process.env.TOKEN_ID;

// If we weren't able to grab it, we should throw a new error
if (myAccountId == null ||
    myPrivateKey == null ) {
    throw new Error("Environment variables myAccountId and myPrivateKey must be present");
}

// Create our connection to the Hedera network
// The Hedera JS SDK makes this really easy!
const client = Client.forTestnet();

client.setOperator(myAccountId, myPrivateKey);

const walletFirst = new Wallet(
    myAccountId,
    myPrivateKey
)

const walletSecond = new Wallet(
    secondAccountId,
    secondPrivateKey
);

const walletThird = new Wallet(
    thirdAccountId,
    thirdPrivateKey
);
const walletFourth = new Wallet(
    fourthAccountId,
    fourthPrivateKey
);
const walletFifth = new Wallet(
    fifthAccountId,
    fifthPrivateKey
);
async function main() {
 
    //Fetching the balances of 5 accounts
    const firstWalletBalance = await  queryBalance(walletFirst);
    const secondWalletBalance = await queryBalance(walletSecond);
    const thirdWalletBalance = await  queryBalance(walletThird);
    const fourthWalletBalance = await queryBalance(walletFourth);
    const fifthWalletBalance = await  queryBalance(walletFifth);
  

    console.log("The balance of the Account 1 is: " + firstWalletBalance.tokens.get(tokenId));
    console.log("The balance of the Account 2 is: " + secondWalletBalance.tokens.get(tokenId));
    console.log("The balance of the Account 3 is: " + thirdWalletBalance.tokens.get(tokenId));
    console.log("The balance of the Account 4 is: " + fourthWalletBalance.tokens.get(tokenId));
    console.log("The balance of the Account 5 is: " + fifthWalletBalance.tokens.get(tokenId));
    

    process.exit();
}

async function queryBalance(user) {
    //Create the query
    const balanceQuery = new AccountBalanceQuery()
        .setAccountId(user.accountId);

    //Sign with the client operator private key and submit to a Hedera network
    const tokenBalance = await balanceQuery.execute(client);

    return tokenBalance;
}

main();
