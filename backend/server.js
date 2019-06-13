const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || process.argv[2] || 8080
const curbsideRouter = require('./routes/curbsideprgm')
const categoryListRouter = require ('./routes/categorylist')
const cityListRouter = require('./routes/citylist')
const searchRouter = require('./routes/search')

app.use(bodyParser.json())
app.use(cors())
app.use('/curbsideprgm', curbsideRouter)
app.use('/categorylist', categoryListRouter )
app.use('/citylist', cityListRouter)
app.use('/search', searchRouter)

app.listen(port, () => {
    console.log(`listening at ${port}`)
})