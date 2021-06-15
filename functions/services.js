const firebase = require('firebase-admin')

const firebaseConfig = {
  apiKey: 'AIzaSyDO0Xd8DFgox228HDVMd7ja7MJj7FFj5gw',
  authDomain: 'reserva-agil.firebaseapp.com',
  projectId: 'reserva-agil',
  storageBucket: 'reserva-agil.appspot.com',
  messagingSenderId: '952350697672',
  appId: '1:952350697672:web:117e03744d99f9558addfd'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const newDoc = db.collection('reservas').doc()

const newReserva = async (dataReserva) => {
  const { apellido, cantPersonas, fecha, nombre, sede, telefono } = dataReserva
  await newDoc.set({
    apellido: apellido,
    cant_personas: cantPersonas,
    fecha: fecha,
    nombre: nombre,
    sede: sede,
    telefono: telefono
  })
}

const newEmpleado = async (dataEmpleado) => {
  const { apellido, email, rol, nombre, sede, telefono } = dataEmpleado
  await newDoc.set({
    apellido: apellido,
    email: email,
    nombre: nombre,
    rol: rol,
    sede: sede,
    telefono: telefono
  })
}

const getReservas = async () => {
  const snapshot = await db.collection('reservas').get()
  const response = []
  await snapshot.forEach((doc) => {
    response.push(doc.data())
  })
  return response
}

const getEmpleados = async () => {
  const snapshot = await db.collection('empleados').get()
  const response = []
  await snapshot.forEach((doc) => {
    response.push(doc.data())
  })
  return response
}

exports.newReserva = newReserva
exports.newEmpleado = newEmpleado
exports.getReservas = getReservas
exports.getEmpleados = getEmpleados
