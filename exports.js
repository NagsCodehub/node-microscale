//exports.id=1 //this is good

//exports= {id:1}; //not good

//exports.id=1 //this is ok


//npm i -o --optional dependency

//npm i -D or npm i --save dev  ---/dev dependency

//npm update to update all packages listed in package.json

//semantic versioning
 // 2.79 is same as 2.79.*
 //~1.2 is same as 1.2.x where x>0
 //~1.2.3 is same as 1.2.x where x>3
 //npm i npm -g --will update npm itself

 //npm outdated -g will check if any of the packages are outdated.
 //npm config list -l will show all the configurations which can be controlled

 //if using npm init a lot we can change author nsme setting with npm config set init-author-name "Nag Kar"
 //npm config delete init-author-name
 //npm config set save true will make the npm install with --save flag default
 //npm search to find packages in registry

 //npm help shrinkwrap helps in lockdown of package dependency version to get same versions when anybody does npm install

 //npm home <package-name> takes to homepage of package
 //npm repo <packagename> open the repository page of package

 //npm prune remove packages in node_modules but doesn't exists in package.json

 //process/buffer are global objects available within script
 //process acts as bridge between node app and it's running environment
  //node -p "prpcess.versions" read version of node and its current dependencies
  //node -p "process.env" expose a copy of the user environment 
console.log(arguments);