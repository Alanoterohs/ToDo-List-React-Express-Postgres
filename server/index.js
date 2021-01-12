const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./databaseconfig')
const port = 4000

app.use(cors())

app.get('/todos', (req,res) => {
    const todos = pool.query('SELECTED * FROM todos');

    todos
        .then(res => {
            console.log(res.rows)
        })
        .catch(error => console.error(error.message))
})


app.listen(port, () => {
    console.log(`server has been connected on server ${port}`)
})