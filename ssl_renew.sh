#!/bin/bash

/usr/local/bin/docker-compose -f /home/mrcat/blog/docker-compose.yml run certbot renew \
&& /usr/local/bin/docker-compose -f /home/mrcat/blog/docker-compose.yml kill -s SIGHUP webserver
