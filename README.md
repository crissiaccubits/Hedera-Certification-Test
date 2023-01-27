# Hedera Repo Overview

This repo holds all the assets for the following coding tasks.

1. Hedera Accounts 
2. The Hedera Consensus Service
3. The Hedera Token Service
4. Scheduled Transactions 
5. Smart Contract Service
6. Multi-signature Transactions

Each coding task solution is added as a separate directory.

##  Prerequisie

1. Node.js - 16 or greater
2. npm 

## Instructions

The solutions and outputs for each task are available in a separate directory.

*****************************************************************************************************************
### Hedera Accounts Setup

  The solutions are available in the 'Account' directory.

  **cd 1.Setup**

  **npm install**

  **npm start:createaccounts**  - To Create 5 accounts


  The solution scripts are added in the  '<Account/scripts>' directory.

  The outputs are added in the '<Account/outputs>' directory.

*****************************************************************************************************************
### The Hedera Token Service

  The solutions are available in the repo '<Token_Service>' directory.

 **cd <2.Token_Service>**

  **npm install**

 **npm install**

  **start:createfungible**  - To create fungible tokens

  **npm start:queryfungible**  - To query balances of five accounts

  **start:increasefungiblesupply**  - To increase the fungible token supply

  **npm start:transferfungible**  - To associate and transfer fungible tokens

  **start:pausefungible**  - To pause fungible tokens

  **npm start:unpausefungible**  - To unpause fungible

  **npm start:transferwithoutassocfungible**  - To transfer fungible tokens



  The solution scripts are added in the  '<Token_Service/scripts/fungible>' directory.

  The outputs are added in the '<Token_Service/outputs>' directory.

*****************************************************************************************************************
### Smart Contract Service

  The solutions are available in the repo '<SmartContract_Service>' directory.

  **cd <3.SmartContract_Service>**

  **npm install**
  
  **npm start:deploytohedera**  - To deploy contract

  **npm start:getfunction**  - To call the function execution

  The solution scripts are added in the  '<SmartContract_Service/scripts>' directory.

  The outputs are added in the '<SmartContract_Service/outputs>' directory.

*****************************************************************************************************************
### The Hedera Consensus Service

  The solutions are available in the  '<6.Consensus_Service>' directory.

 **cd <6.Consensus_Service>**

  **npm install**

  **npm start:createtopic**  - To create topic

  **npm start:submitmessage**  - To submit message to a topic.

  **npm start:subscribe**  - To subscribe message


  The solution scripts are added in the  '<Consensus_Service/scripts>' directory.

  The outputs are added in the '<Consensus_Service/outputs>' directory.

*****************************************************************************************************************


### Scheduled Transactions 

  The solutions are available in the repo '<Scheduled_TX>' directory.

  **cd <Scheduled_TX>**

  **npm install**

  **npm start:transferhbar**  - To transfer hbar

  **npm start:transferhbar**  - To transfer hbar


  The solution scripts are added in the  '<Scheduled_TX/scripts>' directory.

  The outputs are added in the '<Scheduled_TX/outputs>' directory.



*****************************************************************************************************************
### Multi-signature Transactions

  The solutions are available in the repo '<Multi_Signature>' directory.

  **cd <Multi_Signature>**

  **npm install**

  **npm start:transferhbar**  - To transfer hbar

  **npm start:transferhbar**  - To transfer hbar

 The solution scripts are added in the  '<Multi_Signature/scripts>' directory.

 The outputs are added in the '<Multi_Signature/outputs>' directory.

*****************************************************************************************************************

## Accounts List

MY_ACCOUNT_ID = 0.0.1346

MY_PRIVATE_KEY = a5924e8bfddda9d5d16dd2b5caa590ab2912a19595d598ae84f9630a4c5207dc

*****************************************************************************************************************

SECOND_ACCOUNT_ID = 0.0.6448

SECOND_PRIVATE_KEY = 302e020100300506032b6570042204206dc2540368fc0c767c6d440ec9a482affe661acf7a4a50c0cd0b1e835038057c

*****************************************************************************************************************

THIRD_ACCOUNT_ID =  0.0.6449

THIRD_PRIVATE_KEY = 302e020100300506032b657004220420aef91c490be8cc2c319f140ae6ba2fade898d871d495759fec77356ce3bce865

*****************************************************************************************************************

FOURTH_ACCOUNT_ID = 0.0.6450

MY_PRIVATE_KEY = 302e020100300506032b657004220420620824ba4c417f30b1a830b1f2b570c3696ee2ae2d8192c6025817bf3509560f

*****************************************************************************************************************
FOURTH_ACCOUNT_ID = 0.0.6451

MY_PRIVATE_KEY = 302e020100300506032b65700422042030241fb7a4fcdb90cd647bada358e173312e29de106c0ea9a0f2ccd659dea162
*****************************************************************************************************************