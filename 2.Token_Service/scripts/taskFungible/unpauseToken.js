const {
    Client,
    TokenUnpauseTransaction,
    PrivateKey
} = require("@hashgraph/sdk");
require('dotenv').config({ path: '.env' });

const myAccountId = process.env.FIRST_ACCOUNT_ID;
const myPrivateKey = PrivateKey.fromString(process.env.FIRST_PRIVATE_KEY);

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
async function main() {

    //Burn 42 tokens and freeze the unsigned transaction for manual signing
    const transaction = await new TokenUnpauseTransaction()
        .setTokenId(tokenId)
        .freezeWith(client);

    //Sign with the supply private key of the token
    const signTx = await transaction.sign(myPrivateKey);

    //Submit the transaction to a Hedera network
    const txResponse = await signTx.execute(client);

    //Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    //Get the transaction consensus status
    const transactionStatus = receipt.status;

    console.log("The transaction consensus status " +transactionStatus.toString());

    process.exit();
}

main();
