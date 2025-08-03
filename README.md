<div align="center">


 [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&color=F01&lines=𝐍𝐄𝐓𝐇𝐔𝐖𝐇+𝐗𝐌𝐃+𝐕1+𝐖𝐀𝐓𝐒𝐀𝐏𝐏+𝐁𝐎𝐓)](https://git.io/typing-svg)
<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">


   
 
<hr>

<b>COPY DEPLOY CODE</b></br>
# COPY WORKFLOW CODE 👇💗

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependenci

    - name: Start application
      run: npm start
<
