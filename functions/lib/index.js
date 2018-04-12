"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    const username = 'Rinat';
    const greeter = thisusername => `Hello, ${thisusername}`;
    console.log(greeter(username));
    response.send(greeter(username));
});
//# sourceMappingURL=index.js.map