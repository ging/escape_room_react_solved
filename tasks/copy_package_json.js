#!/usr/bin/env node
 
import fs from 'fs';

 var newPackageJson = {
     "name": "escape-room",
     "scripts": {
        "start": "cross-cat asciiart",
        "dev": "cross-cat asciiart",
        "bomb": "vite",
        "build": "vite build"
     }
 }

 fs.readFile('./package.json', 'utf8', (err, jsonString) => {
     if (err) {
         console.log("Could not read package.json:", err)
         return
     }
     try {
         var oldJson = JSON.parse(jsonString);
         oldJson.scripts = newPackageJson.scripts;
         oldJson.name = newPackageJson.name;
         oldJson.devDependencies = undefined;
         //remove canvas from dependencies, because it is not needed in production
        delete oldJson.dependencies['canvas'];
         fs.writeFile('./production/package.json', JSON.stringify(oldJson, null, 2), err => {
             if (err) {
                 console.log('Error writing package.json', err)
             } else {
             }
         })    
     } catch(e) {
         console.error("The package.json file was malformed")
     }

 })