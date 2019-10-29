import * as firebase from 'firebase/app'
import 'firebase/database'

function initializeFirebase() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7Nfk2ApAFVzj34RcE_gJ8jfXoIfHbdl4',
      authDomain: 'dwh-delft.firebaseapp.com',
      databaseURL: 'https://dwh-delft.firebaseio.com',
      projectId: 'dwh-delft',
      storageBucket: 'dwh-delft.appspot.com',
      messagingSenderId: '1045750324578',
      appId: '1:1045750324578:web:465ec3a864c92b6d97e03b'
    })
  }
}

function prefixFormDataWithOrder(data) {
  const newData = {}

  let i = 0
  for (const [key, value] of Object.entries(data)) {
    newData[`${i}_${key}`] = value
    i++
  }

  return newData
}

export default function(receiver, name, data) {
  initializeFirebase()

  return firebase
    .database()
    .ref(name)
    .push()
    .set({ receiver, data: prefixFormDataWithOrder(data) })
}
