const {
    Client,
    PrivateKey,
    AccountCreateTransaction,
    AccountBalanceQuery,
    Hbar,
  } = require("@hashgraph/sdk");
  require("dotenv").config();
  
  async function main() {
    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;
  
    // If we weren't able to grab it, we should throw a new error
    if (myAccountId == null || myPrivateKey == null) {
      throw new Error(
        "Environment variables myAccountId and myPrivateKey must be present"
      );
    }
  
    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this really easy!
    const client = Client.forTestnet();
  
    client.setOperator(myAccountId, myPrivateKey);
    //Verify the account balance
    const accountBalance = await new AccountBalanceQuery()
      .setAccountId(myAccountId)
      .execute(client);
  
    console.log(
      "****************************************************************************"
    );
    console.log("The current account ID is: " + myAccountId);
    console.log("The current account private key :" + myPrivateKey);
    
    // Create the queries
    const queryMine = new AccountBalanceQuery().setAccountId(myAccountId);
    const accountBalanceMine = await queryMine.execute(client);
    console.log(`My account balance ${accountBalanceMine.hbars} HBar`)
    console.log(
      "The current account balance is: " +
        accountBalance.hbars.toTinybars() +
        " tinybar."
    );
  
    for (let i = 0; i< 5; i++) {
      //Create new keys
      const newAccountPrivateKey = PrivateKey.generateED25519();
      const newAccountPublicKey = newAccountPrivateKey.publicKey;
  
      //Create a new account with 1,000 tinybar starting balance
      //100000000  tiny bar = 1 hbar
      const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(5000000000))
        .execute(client);
  
      // Get the new account ID
      const getReceipt = await newAccount.getReceipt(client);
      const newAccountId = getReceipt.accountId;

      console.log("****************************************************************************" );

      console.log("The new account ID is: " + newAccountId);
      console.log("The new account private key :" + newAccountPrivateKey);
      console.log("The new account public key :" + newAccountPublicKey);
      //Verify the account balance
      const accountBalance = await new AccountBalanceQuery()
        .setAccountId(newAccountId)
        .execute(client);
      console.log(
        "The new account balance is: " +
          accountBalance.hbars +
          " HBar."
      );
      console.log(
        "The new account balance is: " +
          accountBalance.hbars.toTinybars() +
          " tinybar."
      );
     
    }
    process.exit(1);
  }
  main();