
/*
 * Views handling
 */
EC.View = function(opt) {
    var self = this;
    this.el = opt.el || 'body';
    this.users = opt.service;

    $(document).ready(function() {	
	self.renderChat();
    });
};

EC.View.prototype.renderChat = function() {
    var chat = 
	'<div class="aschat">' +
	'<div id="arrival-messages"></div>' +
	'<form id="new-message">' +
	'<input type="textfield" id="message-content"/>' +
	'</form>' +
	'</div>';
    $(this.el).append(chat);
};