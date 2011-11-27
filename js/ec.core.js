
/*
 * Core 
 * It interacts between Chat Objects and XMPP Chat
 */
var EC = {};

EC = function(opt) {
    var self = this;

    this.debug = opt.debug || false;
    this.service = opt.service;

    this.chatObjects = [];
    this.renderChats();

    $.subscribe('ec.init', function() {console.log('Client connected');});
    
    
    this.client = new EC.Client(opt);
    this.client.connect();
    
    //this.view = new EC.View(opt);
    
    this.listen();
};

EC.prototype.disconnect = function() {
    this.client.disconnect();
};

/*
 * Instanciate a Chat object for each service
 */
EC.prototype.renderChats = function() {
    var self = this;
    $(document).ready(function() {
	for (var i = 0; i < self.service.length; i++) {
	    self.chatObjects.push(new EC.Chat(self.service[i]));
	}    
    });
};


EC.prototype.listen = function() {
    var self = this;

    /*
     * When a message is sent from the view
     */
    $.subscribe('message.send', function(event, message) {
	console.log(message);
	self.client.message(message.to, message.body);
    });

    /*
     * When a message is received from the server
     */
    $.subscribe('message.client.im', function(event, message) {
	for (var i = 0; i < self.chatObjects.length; i++) {
	    if (self.chatObjects[i].getJid() == message.from.split('/')[0]) {
		self.chatObjects[i].appendRemoteMessage(message.body);
	    }
	    
	    //self.view.chatObjects[i].toto();
	}
	console.log(message);
	//self.client.message(message.to, message.body);
    });
};
