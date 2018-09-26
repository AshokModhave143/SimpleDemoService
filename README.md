# Node Microservice - demo

This is simple microservice written by using NodeJs and serverless function. This is used as a backend for ChatBot application, this processes the request from Google Dialogflow (API.ai).
Node Microservice is deployed on AWS by using Lambda function. Below are some key features it has -
- caters data and processing backend to the ChatBot application
- This application url is configured in Dialogflow as a hook to process the NLP request.

### Tech

* [NodeJs] - Nodejs backend
* [Express] - Used to expose endpoint
* [Express-router] - Used to handle the request routes
* [MongoDB] - Store the data into DB
* [node-salesforce] - library to connect to salesforce

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd SimpleDemoService
$ npm install -d
$ npm run start
```
