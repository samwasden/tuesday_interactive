const express = require('express')
const path = require('path')

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(4000, () => console.log('fucking bitches on port 4000'))