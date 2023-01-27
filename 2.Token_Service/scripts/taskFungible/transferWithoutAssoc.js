
const {
    TransferTransaction,
    Client,
    TokenAssociateTransaction,
    Wallet,
    PrivateKey
} = require("@hashgraph/sdk");
require('dotenv').config({ path: '.env' });

const myAccountId = process.env.FIRST_ACCOUNT_ID;
const myPrivateKey = PrivateKey.fromString(process.env.FIRST_PRIVATE_KEY);

const otherAccountId = process.env.OTHER_ACCOUNT_ID;
const otherPrivateKey = PrivateKey.fromString(process.env.OTHER_PRIVATE_KEY);

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

const wallet = new Wallet(
    otherAccountId,
    otherPrivateKey
);

async function main() {
    
    //Create the transfer transaction
    const transaction = await new TransferTransaction()
        .addTokenTransfer(tokenId, client.operatorAccountId, -135)
        .addTokenTransfer(tokenId, wallet.accountId, 135)
        .freezeWith(client);

    //Sign with the sender account private key
    const signTx =  await transaction.sign(myPrivateKey);

    //Sign with the client operator private key and submit to a Hedera network
    const txResponse = await signTx.execute(client);

    //Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    //Obtain the transaction consensus status
    const transactionStatus = receipt.status;

    console.log("The transaction consensus status " +transactionStatus.toString());

    process.exit();
}

main();
