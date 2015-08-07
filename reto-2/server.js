//var FireDetector = require('./fire_detector');
var Session = require('./session');

function handleRequest(req, res) {

	var sessionTime = 0;

	session = new Session();

	session.on('close', function(){
		sessionTime = 0;
		console.log('Session Expired.');		
	});

	setInterval(function(){
		console.log('Checking Session.' , sessionTime);
		session.checkSession(sessionTime);
		sessionTime += 1000;		
	}, 1000);
}

var server = require('http').createServer();
server.on('request',handleRequest);
server.listen(8080);






