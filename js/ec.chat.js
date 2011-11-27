/*
 * Chat factory
 */
EC.Chat = function(client) {
    var chat = $(EC.template.chat(client.name));

    /*
     * Attach some variables to the element
     */
    chat.data('jid', client.jid);
    chat.data('name', client.name);

    chat.submit(function(e) {
	e.preventDefault();
	var msgEl = $(this).find('#message-content');

	if (msgEl.val() == '')
	    return;
	
	console.log('Sending message to : ' + $(this).data('jid'));
	message = {
	    body : msgEl.val(),
	    to : $(this).data('jid')
	}
	$.publish('message.send', message);
	chat.appendLocalMessage(msgEl.val());
	msgEl.val('');
    });
    
    chat.getJid = function() {
	return chat.data('jid');
    };
    
    chat.getName = function() {	
	return chat.data('name');
    };

    chat.appendRemoteMessage = function(msg) {
	chat.find('#arrival-messages').append('-- ' + msg + '<br/>');
    }

    chat.appendLocalMessage = function(msg) {
	chat.find('#arrival-messages').append('++ ' + msg + '<br/>');
    }

    $('body').append(chat);
    return chat;
}

/*
 *
 * Chat template
 *
 */
EC.template = {
    chat : function(name) {
	var el = '<div class="echat">' +
	    '<div id="name"><%= name %></div>' +
	    '<div id="arrival-messages"></div>' +
	    '<form id="new-message">' +
	    '<input type="textfield" id="message-content" autocomplete="false"/>' +
	    '</form>' +
	    '</div>';
	var compiled = _.template(el);
	return compiled({name : name});
    }
};