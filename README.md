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

  **npm createscheduledtx**  - To create scheduledtx


  The solution scripts are added in the  '<Scheduled_TX/scripts>' directory.

  The outputs are added in the '<Scheduled_TX/outputs>' directory.



*****************************************************************************************************************
### Multi-signature Transactions

  The solutions are available in the repo '<Multi_Signature>' directory.

  **cd <Multi_Signature>**

  **npm install**

  **npm start:multisig**  - To transfer MultiSig

 

 The solution scripts are added in the  '<Multi_Signature/scripts>' directory.

 The outputs are added in the '<Multi_Signature/outputs>' directory.

*****************************************************************************************************************

