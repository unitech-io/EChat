

/*
 * Main object
 */






    /*
     * Old object
     */


// var connection = null;

// function log(msg) {
//     $('#log').append('<div></div>').append(document.createTextNode(msg));
// }

// function appendMessage(msg) {
//     $('#arrival-messages').append(msg + '<br/>');
// }

// function onConnect(status) {
//     if (status == Strophe.Status.CONNECTING) {
// 	log('Strophe is connecting.');
//     } else if (status == Strophe.Status.CONNFAIL) {
// 	log('Strophe failed to connect.');
// 	$('#connect').get(0).value = 'connect';
//     } else if (status == Strophe.Status.DISCONNECTING) {
// 	log('Strophe is disconnecting.');
//     } else if (status == Strophe.Status.DISCONNECTED) {
// 	log('Strophe is disconnected.');
// 	$('#connect').get(0).value = 'connect';
//     } else if (status == Strophe.Status.AUTHFAIL) {
// 	log('Strophe is auth failed.');
// 	$('#connect').get(0).value = 'fali.';
//     } else if (status == Strophe.Status.CONNECTED) {
// 	log('Strophe is connected.');
// 	log('ECHOBOT: Send a message to ' + connection.jid + 
// 	    ' to talk to me.');	
// 	connection.addHandler(onMessage, null, 'message', null, null,  null); 
// 	connection.send($pres().tree());
//     }
// }

// function onMessage(msg) {
//     var to = msg.getAttribute('to');
//     var from = msg.getAttribute('from');
//     var type = msg.getAttribute('type');
//     var elems = msg.getElementsByTagName('body');

//     if (type == "chat" && elems.length > 0) {
// 	var body = elems[0];
// 	appendMessage('-- ' + Strophe.getText(body));
//     }
//     return true;
// }

// function prepareUi() {
//     var msgEl = $('#message-content');

//     /*
//      * When user submit new text
//      */
//     $('#new-message').submit(function(e) {
// 	e.preventDefault();

// 	// Prepare message
// 	var b = $msg({
// 	    type: 'chat', 
// 	    to: 'admin@localhost',
// 	    from: connection.jid
// 	}).c("body").t(msgEl.val());

// 	// Send XML
// 	connection.send(b.tree());

// 	// Append message to chat
// 	appendMessage('++ ' + msgEl.val());

// 	// Clear textfield
// 	msgEl.val('');
//     });

//     /*
//      *
//      */
// }

// $(document).ready(function () {
//     var BOSH_SERVICE = 'http://localhost:8080/http-bind';

//     connection = new Strophe.Connection(BOSH_SERVICE);

//     //  connection.rawInput = function (data) { log('RECV: ' + data); };
//     // connection.rawOutput = function (data) { log('SEND: ' + data); };

//     // //Uncomment the following line to see all the debug output.
//     // Strophe.log = function (level, msg) { log('LOG: ' + msg); };



//     connection.connect('admin2@localhost', 'admin2', _.bind(onConnect, this));
//     prepareUi();
// });




    // Uncomment the following lines to spy on the wire traffic.
    //connection.rawInput = function (data) { log('RECV: ' + data); };
    //connection.rawOutput = function (data) { log('SEND: ' + data); };

    // Uncomment the following line to see all the debug output.
    //Strophe.log = function (level, msg) { log('LOG: ' + msg); };
