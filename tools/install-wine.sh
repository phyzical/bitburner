#!/bin/bash

sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine-stable wine64 wine32:i386 wine64
