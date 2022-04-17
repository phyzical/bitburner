#!/bin/bash

sudo dpkg --add-architecture i386

wget -qO- https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -

sudo apt-add-repository "deb http://dl.winehq.org/wine-builds/ubuntu/ $(lsb_release -cs) main"
sudo apt-get update

sudo apt-get install -y --install-recommends wine-stable winehq-stable
