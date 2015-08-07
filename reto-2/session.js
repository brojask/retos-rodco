var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function Session() {
	EventEmitter.call(this);
}

inherits(Session, EventEmitter);

Session.prototype.checkSession = function(time) {
	if(time > 5000) {		
		this.emit('close');
	}
}

module.exports = Session;