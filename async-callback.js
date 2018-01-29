const fs=require('fs');

const readFileAsarray=function(file,cb)
{
    fs.readFile(file,function(err,data){
        if(err){return cb(err);}
        const lines=data.toString().trim().split('\n');
        cb(null,lines);
    });
};

//example call with callback
readFileAsarray('./numbers',(err,lines)=>{
 if (err) throw err;

 const numbers= lines.map(Number);
 const oddNumbers=numbers.filter(number => number % 2 === 1);
 console.log('odd numbers count:',oddNumbers.length);

});

//example callback with Promise

readFileAsarray('./numbers')
       .then(lines=>{
        const numbers=lines.map(Number);
        const oddNumbers=numbers.filter(number=> number % 2 ===1);
        console.log('odd numbers count:',oddNumbers.length);
       })
       .catch(console.error);