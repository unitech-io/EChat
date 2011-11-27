# EChat

## Install

    sudo apt-get install ejabberd nginx curl

## Conf Ejabberd

* Add user
    sudo ejabberdctl register admin localhost admin
    
* Add the admin
    %% ejabberd.cfg
    %% Admin user
    {acl, admin, {user, "admin", "localhost"}}.
    
* Enable mod_http_bind (BOSH)

    %% ejabberd.cfg
    %%
    {modules,
    [
    ...
    {mod_http_bind, []},
    ...
    ]
    }.

## Conf Nginx

    server {
	 listen 8080;
	 server_name localhost;
	 location / {
	 	  root /var/www/;
	 }	 
	 location /http-bind {
	 	  proxy_buffering off;
	 	  tcp_nodelay on;
	 	  keepalive_timeout 55;
	 	  proxy_pass http://localhost:5280;
	 }
    }
