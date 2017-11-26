#!/bin/bash  
echo "Running app"  
./scripts/backend &./scripts/frontend && fg
echo "App built"