const express = require('express');
const app = express();
const port = 3000;
const executequery = require('../executeQuery')

app.get('/api/getdata',async (req,res) => {
    try {
        const execution = await executequery.executeQuery('EXEC SelectAllStudents')
    } catch(err) {
        //console.error(`Not Executed : ${err}`)
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})