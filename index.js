//not recommended

process.env.port

//instead load into config object and change there
const {config} =require('./Utils');
config.port=8081;




