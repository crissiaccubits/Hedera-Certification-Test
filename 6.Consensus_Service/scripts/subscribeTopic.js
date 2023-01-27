const {
    Client,
    PrivateKey,
    TopicMessageQuery,
} = require("@hashgraph/sdk");
require('dotenv').config();

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);
const topicId = process.env.TOPIC_ID;

// If we weren't able to grab it, we should throw a new error
if (myAccountId == null || myPrivateKey == null) {
    throw new Error("Environment variables for test accounts must be present");
}

// Setup client
const client = Client.forTestnet();
client.setOperator(myAccountId, myPrivateKey);


const subscribeTopic = async (topicId) => {
    //Create the query to subscribe to a topic
    new TopicMessageQuery()
        .setTopicId(topicId)
        .setStartTime(0)
        .subscribe(
            client,
            (message) => console.log(Buffer.from(message.contents, "utf8").toString())
        );
}

subscribeTopic(topicId);

