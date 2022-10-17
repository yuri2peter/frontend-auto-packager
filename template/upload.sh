#!/bin/bash

# 定位到工作目录
cd ${path}
ls

# git
git add .
git commit -m "${msg}"
git push

