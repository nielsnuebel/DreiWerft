#!/bin/bash

npm run init
./craftscripts/set_perms.sh
mysql -uroot -ppaula -hlocalhost dreiwerft < database.sql
clear
echo "Define vhost http://dreiwerft.local"
echo "Open Backend with you Browser http://dreiwerft.local/admin"
echo "Login with User: 'kitten' | Pass: superkittn"
echo "If you want to use the Craft Personal version, you must deactivate the localization before you switch."
echo "Activate Dev-Task with 'npm run dev'"
