// activity.js
console.log("Mounting activity.js... ");

let activity = {
	timestamp: new Date().getTime(),
	text: "Ate lunch",
	user: {
		id: 1,
		name: 'Nate',
		avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
	},
	comments: [
		{from: 'Ari', text: 'Me too'}
	]
};

// eof