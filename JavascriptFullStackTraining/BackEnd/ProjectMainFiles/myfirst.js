const express = require ('express')
const app = express()
const port = process.env.port || 3000
const executequery = require('../ProjectUtilityComponents/executeQuery')

app.get('/api/displaygreeting', async (req, res) => {
    res.json({"status":"running"})
    const queryexecution = executequery.executeQuery(`INSERT INTO StudentTable VALUES (19944,'API Insert')`)
    const queryexecutionstatus = await queryexecution
})

app.listen(port,() => {
    console.log('Server is listening on port')
})