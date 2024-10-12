#!/bin/sh

### Create production dir
rm -rf production
mkdir production

### Copy app dirs
for dir in src public
do
    cp -r $dir production
done

### Copy app files
for file in asciiart .gitignore index.html eslint.config.js vite.config.js
do
    cp $file production
done

## Files that neex extra processing
# Package.json - Remove unnecessary scripts and devDependencies
node tasks/copy_package_json.js


sed -e '/\/\* BEGIN - MAP FUNCTION GOES HERE \*\//,/\/\* END - MAP FUNCTION GOES HERE \*\//c\' production/src/BombComponentList.jsx > aux && mv aux production/src/BombComponentList.jsx
sed -e '3d'  production/src/BombComponentList.jsx > aux && mv aux production/src/BombComponentList.jsx

for ug in production/public/jquery-4.5.6.min.js production/public/fetch.js production/public/escapp/escapp.js
do
   npx babel $ug > aux
   npx uglifyjs aux --keep-fnames -c -m -e  -o  $ug
   rm aux
done

#cd production
#git init
#git remote add origin https://github.com/ging/iweb_escape_room_2021.git
#git add .
#git commit -am "First commit"
