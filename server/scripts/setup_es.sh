#!/usr/bin/env bash

# syntax: sudo setup_es

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script as root"
  exit
else
  apt-get install elasticsearch

  # We should be done now, but it's not all ready. We need to do
  # a little more.

  mkdir -p /var/run/elasticsearch
  chown elasticsearch: /var/run/elasticsearch
  chown elasticsearch: /var/lib/elasticsearch
  chown elasticsearch: /var/log/elasticsearch

  # Fixing where the PID file runs. It typically doesn't have access to /var/run

  sed -e 's|^PID_FILE=.*$|PID_FILE=/var/run/$NAME/$NAME.pid|g' -i /etc/init.d/elasticsearch

  # Setting it up to allow it to run as a daemon

  sed -e ‘s|^#START|START|g’ -/etc/default/elasticsearch
fi
