/*
 * EChat specific file
 */

var echat = new EC({
    jid : 'admin2@localhost',
    password : 'admin2',
    debug : false,
    host : 'http://localhost:8080/http-bind',
    service : [
	{
	    name : 'Alyson Galtier',
	    jid : 'agaltier@localhost'
	},
	{
	    name : 'Francois Assise',
	    jid : 'admin@localhost'
	}
    ]
});


