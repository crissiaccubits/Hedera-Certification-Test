const { TopicMessageQuery, Client, PrivateKey } = require("@hashgraph/sdk");
require("dotenv").config();

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);
const topicId = process.env.TOPIC_ID;

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

async function main() {
  //Create the query to subscribe to a topic  //1674642787.359447003 //1674641787.359447003
  new TopicMessageQuery()
    .setTopicId(topicId)
    .setStartTime()
    .setEndTime()
    .subscribe(client, (message) =>
      console.log(Buffer.from(message.contents, "utf8").toString())
    );
}

main();
