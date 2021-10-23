const express = require('express');
const path = require('path');
const PORT = 3000

const App = express()



App.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static'), { extensions: ["js"] }))

App.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})

App.get('/test', (req, res) => {
    res.send("test")
})



App.listen(PORT, () => console.log(`server running on port ${PORT}`))