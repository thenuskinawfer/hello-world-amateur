const mssql = require ('mssql')
const config = require ('../ProjectConfigurationFiles/appsettings.json')

exports.connectionMessage = mssql.connect(config.databaseConnectionString)

async function connectToDatabase() {
    try {
        const connectionStatus = await exports.connectionMessage
        console.log(`Connected to Database Server ${connectionStatus}`)
    } catch(err) {
        console.error(`Unable to connect to Database : ${err}`)
    }
}

connectToDatabase()