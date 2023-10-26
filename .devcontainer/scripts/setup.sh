#!/bin/bash
source $NVM_DIR/nvm.sh
cd /workspaces/studio-repo-demo
nvm install 18
nvm alias system 18
npm install
wget https://yext-cli-pub.s3.amazonaws.com/cli/linux/yext
sudo mv yext /usr/local/bin
chmod +x /usr/local/bin/yext