#!/usr/bin/env node
 
 var fs = require('fs')
 var newPackageJson = {
     "name": "escape-room",
     "scripts": {
        "start": "cross-cat asciiart",
        "bomb":  "react-scripts start",
        "build": "react-scripts build",
        "test":  "react-scripts test",
        "eject": "react-scripts eject"
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