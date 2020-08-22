const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 8080

//configuración
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/api', require('./route'))


app.listen(port, '0.0.0.0', () => {
	console.log('Servidor funcionado en el puerto: ' + port);
})