#!/bin/sh

for extra in puzzle
do
    cd extras/$extra
    npm run production
    mkdir ../../docs/$extra
    cp -r dist/* ../../docs/$extra
    cd ../..
done
