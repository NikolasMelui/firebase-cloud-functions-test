import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const sayThis = functions.https.onRequest((request, response) => {
	let responseStrign = '';
	const queryStringObject = request.query;
	Object.keys(queryStringObject).forEach(key => (responseStrign += `<p>${key} => ${queryStringObject[key]}</p>`));
	console.log(responseStrign);
	response.send(responseStrign);
});
