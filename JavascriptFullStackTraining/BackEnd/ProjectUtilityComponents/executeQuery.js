const mssql = require ('mssql')
const mssqlconnector = require ('./mssqlconnector')

exports.executeQuery = async function executeQuery(query) {
    try {
        let connection = mssqlconnector.connectionMessage
        let newRequest = (await connection).request()
        let newQuery = newRequest.query(query)
        console.log((await newQuery).output)
        console.log((await newQuery).recordset)
        ;(await connection).close()
    } catch (err) {
        console.error('Error',err)
    }
}

exports.executeQuery(`INSERT INTO StudentTable VALUES (19933,'Maya Angelou')`)