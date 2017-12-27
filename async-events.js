const fs=require('fs');
const EventEmitter=require('events');

class WithTime extends EventEmitter{
    execute(asyncFunc, ...args){
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args,(err,data) => {
            if(err){
                return this.emit('error',err);
            }
            this.emit('data',data);
            console.timeEnd('execute');
            this.emit('End');
        });
        
    }
}

const withTime=new WithTime();


withTime.on('data', (data) => {
  console.log(`Length: ${data.length}`);
});

//withTime.on('error',console.error);

withTime.on('uncaughtException', (err) => {
   console.log(err);
   //do some clean up
   process.exit(1);
});

withTime.prependListener('data',(data) => {
    console.log(`Characters: ${data.toString().length}`);
});

//withTime.removeListener ... 

//below line is to throw an error
//withTime.execute(fs.readFile, '');

withTime.execute(fs.readFile, __filename);