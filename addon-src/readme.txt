//process to run a c++ addon

1)copy c++ code file under a new directory
2)create a binding.gyp file
3)Do a install of node-gyp plugin by doing npm install -g node-gyp
4)Go to the directory where both c++ file and binding.gyp file exists and do a node-gyp configure
5)This will generate either a Makefile (on Unix platforms) or a vcxproj file (on Windows) in the build/ directory.
6)invoke the node-gyp build command to generate the compiled addon.node file. This will be put into the build/Release/ directory.
7)Once built, the binary Addon can be used from within Node.js(helloaddon.js file) by pointing require() to the built addon.node module: