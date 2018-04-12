import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
	const username = 'Rinat';
	const greeter = thisusername => `Hello, ${thisusername}`;
	console.log(greeter(username));
	response.send(greeter(username));
});
