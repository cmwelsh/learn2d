#!/bin/bash

# Reload the code on-the-fly with node-supervisor
supervisor -w ./src /home/app/frontend/src/server/custom.js
