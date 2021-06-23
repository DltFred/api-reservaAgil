const firebase = require('firebase-admin')
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


const newReserva = async (dataReserva) => {
  const newDoc = db.collection('reservas').doc()
  const { apellido, cantPersonas, fecha, nombre, sede, telefono } = dataReserva
  await newDoc.set({
    nombre: nombre,
    apellido: apellido,
    fecha: fecha,
    telefono: telefono,
    cant_personas: cantPersonas,
    sede: sede,
  })
}

const newEmpleado = async (dataEmpleado) => {
  const newDoc = db.collection('empleados').doc()
  const { apellido, email, rol, nombre, sede, telefono } = dataEmpleado
  await newDoc.set({
    nombre: nombre,
    apellido: apellido,
    rol: rol,
    telefono: telefono,
    email: email,
    sede: sede,
  })
}

const getReservas = async () => {
  const snapshot = await db.collection('reservas').get()
  const response = []
  snapshot.forEach((doc) => {
    response.push(doc.data())
  })
  return response
}

const getEmpleados = async () => {
  const snapshot = await db.collection('empleados').get()
  const response = []
  snapshot.forEach((doc) => {
    response.push(doc.data())
  })
  return response
}

exports.newReserva = newReserva
exports.newEmpleado = newEmpleado
exports.getReservas = getReservas
exports.getEmpleados = getEmpleados
