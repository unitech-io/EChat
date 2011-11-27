
/*
 * Main
 */
var EC = {};

EC = function(opt) {
    var self = this;

    this.debug = opt.debug || false;
    this.users = opt.service;

    $.subscribe('ec.init', function() {
	console.log('client inited');
    });
    
    if (this.debug) {
	$.subscribe('connected.client.im', function() {
    	    self.client.message('admin@localhost', 'Im connected sisi'); 
	});
    }

    this.client = new EC.Client(opt);
    this.client.connect();
    
    this.views = new EC.View(opt);
};

EC.prototype.disconnect = function() {
    this.client.disconnect();
};

