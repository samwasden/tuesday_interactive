const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: '7f79d867b5a043e9a749f2cbc4afa11e',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully!')
})

// app.use('/css', express.static(path.join(__dirname, '/public/style.css')))

const port = process.env.PORT || 4000

app.listen(port, () => console.log('kicking ass and taking names on port 4000'))