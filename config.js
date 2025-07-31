const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&WsJTTKhb#TpYb9F_BpmyNtNLtxfxpsDqpjnpdmwwEu6Zfk1FVcRQ' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8080' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

