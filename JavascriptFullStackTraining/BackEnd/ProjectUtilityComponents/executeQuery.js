const mssql = require ('mssql')
const mssqlconnector = require ('./mssqlconnector')

exports.executeQuery = async function fetchData() {
    const connectionPool = await mssqlconnector.connectToDatabase();
    const result = await connectionPool.request().query('SELECT * FROM StudentTable');
    console.log(result.recordset);
}

exports.executeQuery()