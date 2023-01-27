const { Client, Wallet, PrivateKey,TransferTransaction, ScheduleCreateTransaction, Hbar, AccountAllowanceApproveTransaction } = require("@hashgraph/sdk");
require('dotenv').config({ path: '.env' });

const accountOne = process.env.MY_ACCOUNT_ID;
const accountOnePrivateKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);
const accountTwo = process.env.OTHER_ACCOUNT_ID;
const accountTwoPrivateKey = PrivateKey.fromString(process.env.OTHER_PRIVATE_KEY);

const accountThree = process.env.THIRD_ACCOUNT_ID;
const accountThreePrivateKey = PrivateKey.fromString(process.env.THIRD_PRIVATE_KEY);

const accountOneUser = new Wallet(
    accountOne,
    accountOnePrivateKey
)

const accountTwoUser = new Wallet(
    accountTwo,
    accountTwoPrivateKey
)

const client = Client.forTestnet();
client.setOperator(accountOneUser.accountId, accountOnePrivateKey);

async function approveAllowance(from, to, amount, key) {
    const transaction = new AccountAllowanceApproveTransaction()
        .approveHbarAllowance(from, to, Hbar.fromTinybars(amount)).freezeWith(client)
    const signTx = await transaction.sign(accountOnePrivateKey);
    const txResponse = await signTx.execute(client);
    const receipt = await txResponse.getReceipt(client);
    console.log(`Approve status is ${receipt.status} for ${to} to take from ${from} upto ${amount}`);
}

async function transferFrom(from, to, amount, key) {
    try {
        const transaction = new TransferTransaction()
            .addHbarTransfer(from, Hbar.fromTinybars(-amount))
            .addHbarTransfer(to, Hbar.fromTinybars(amount))
            .freezeWith(client);
        const txResponse = await transaction.execute(client);
        const receipt = await txResponse.getReceipt(client);
        console.log(`Transfer from ${from} to ${to} for amount ${amount} is ${receipt.status}`)
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    await approveAllowance(accountOneUser.accountId, accountTwoUser.accountId, 20, accountOnePrivateKey);
    await transferFrom(accountOneUser.accountId, accountThree.accountId, 20, accountTwoPrivateKey)
    await transferFrom(accountOneUser.accountId, accountThree.accountId, 20, accountTwoPrivateKey)
    process.exit();
}

main();
