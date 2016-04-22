#!/usr/bin/env bash

# syntax: sudo run_es &

# This script will check to see if elasticsearch is installed in
# the '/usr' directory, and if it is, it will start it up.

ES_STARTUP='bin/elasticsearch'

ES_MAINDIR='/usr/share/elasticsearch'

if [ -f !$ES_MAINDIR/$ES_STARTUP ]
  then
    echo "$0: $ES_MAINDIR/$ES_STARTUP is missing. Cannot run ElasticSearch."
    exit 1
  else
  # Record your current location; we'll bring you back
  # here once elasticsearch has launched.
    pushd .

  # Launch elasticsearch from ES_MAINDIR to ensure no
  # path dependency errors.
    echo "Changing dirctory to $ES_MAINDIR"
    echo "then running $ES_STARTUP"
    cd $ES_MAINDIR && $ES_STARTUP

fi

popd
echo "$0: ElasticSearch has been launched."
