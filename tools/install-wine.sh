#!/bin/bash

sudo dpkg --add-architecture i386

curl -fsSL  https://dl.winehq.org/wine-builds/Release.key | sudo apt-key add -

sudo apt-add-repository "deb http://dl.winehq.org/wine-builds/ubuntu/ $(lsb_release -cs) main"
sudo apt-get update

sudo apt-get install -y --install-recommends winehq-stable
