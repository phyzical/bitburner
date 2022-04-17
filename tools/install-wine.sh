#!/bin/bash

sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get autoclean
sudo apt-get clean
sudo apt-get autoremove
sudo apt install lib32z1
sudo apt install wine64 wine32
