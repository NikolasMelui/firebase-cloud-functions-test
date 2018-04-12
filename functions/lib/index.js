"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.sayThis = functions.https.onRequest((request, response) => {
    let responseStrign = '';
    const queryStringObject = request.query;
    Object.keys(queryStringObject).forEach(key => (responseStrign += `${key} => ${queryStringObject[key]}\n`));
    console.log(responseStrign);
    response.send(responseStrign);
});
//# sourceMappingURL=index.js.map