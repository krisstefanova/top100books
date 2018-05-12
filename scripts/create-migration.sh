#!/bin/bash
now="$(date '+%Y%m%d%H%M%S')"

if [ $1 ]
then
  filetemplate=$now".do."$1".sql"
else
  filetemplate=$now".do..sql"
fi 

echo >> migrations/$filetemplate
