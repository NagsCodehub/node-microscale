//process.stdin for read
//process.stdout for write

//process object is an instance of eventemitter

process.on('exit',(code)=>{
    console.log(`Going to Exit with code: ${code}`)
});

//emitted whenever an unhandled exception occurs.
process.on('uncaughtException',(err)=>{
    console.error(err);

    //force process to exit
    process.exit(1);
});

process.stdin.resume();

console.dog()