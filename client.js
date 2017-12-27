const EventEmitter=require('events');
const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const client=new EventEmitter();
const server=require('./Server')(client);

rl.on('line', (input) =>{
  //console.log(input);  
  client.emit('command',input);
});