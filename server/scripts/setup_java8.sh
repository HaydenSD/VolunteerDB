#!/usr/bin/env bash

# syntax: sudo ./setup_java8

# Plaase note there are no checks here so if any directive
# fails, it will move on to the next; no exit on error

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script as root"
  exit
else
  add-apt-repository ppa:ppa:openjdk-r/ppa || exit 1
  apt-get update || exit 2
  apt-get install openjdk-8-jdk || exit 3
fi


#Set up environment variables

#apt-get install oracle-java8-set-default || exit 4
