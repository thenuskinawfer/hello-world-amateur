const mssql = require('mssql');
const configurationStrings = require('../ProjectConfigurationFiles/appsettings.json');
const databaseConnectionString = configurationStrings.databaseConnectionString
let connectionPool;

exports.connectToDatabase = async function connecttodatabase() {
    if(connectionPool) {
        console.log(`Reusing Existing Connection Pool`);
        return connectionPool;
    } try {
        connectionPool = await mssql.connect(databaseConnectionString);
        console.log(`Connected`)
        return connectionPool;
    } catch(err) {
        console.log(`Error : ${err}`);
        //throw err;
    }
}