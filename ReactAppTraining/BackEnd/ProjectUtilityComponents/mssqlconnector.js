const mssql = require ('mssql')
const config = require('../ProjectConfigurationFiles/appsettings.json')

let connectionMessage = mssql.connect(config.databaseConnectionString)

//exports.connect =
async function connectToDatabase() {
    try {
        console.log(`Connected to Database Server : ${connectionMessage}`)
        return(`Connected to Database Server : ${connectionMessage}`)
    } catch(err) {
        console.log(`Unable to connect to Database : ${connectionMessage}`)
        return(`Unable to connect to Database : ${connectionMessage}`)
    }
}

async function executeQuery() {
    try {
        const initiateRequest = (await connectionMessage).request()
        const newQuery = initiateRequest.query('EXEC dbo.SelectAllStudents')
        const queryResult = (await newQuery).recordset
        console.log(queryResult)
    } catch (err) {
        console.log('Error')
    }
}


connectToDatabase()
executeQuery()