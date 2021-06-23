const functions = require("firebase-functions")
const express = require('express')
const cors = require('cors')
const { newReserva, newEmpleado, getReservas, getEmpleados } = require('./services')

const app = express()
app.use(cors({ origin: true }))

const createServer = () => {
  app.use(express.json())

  app.get('/reservas', (req, res) => {
    getReservas().then(reservas => {
      res.json(reservas)
    })
  })

  app.post('/reservas', (req, res) => {
    const reserva = req.body
    console.log(reserva)
    newReserva(reserva).then(reservas => {
      res.end()
    })
  })

  app.get('/empleados', (req, res) => {
    getEmpleados().then(reservas => {
      res.json(reservas)
    })
  })

  app.post('/empleados', (req, res) => {
    const empleado = req.body
    console.log(empleado)
    newEmpleado(empleado).then(reservas => {
      res.end()
    })
  })

  return app
}

exports.api = functions.https.onRequest(createServer())