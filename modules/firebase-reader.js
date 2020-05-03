import * as firebase from 'firebase/app'
import 'firebase/database'

// To do: refactor firebase-submitter and firebase-writer to a single module

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

export default function(name, callback) {
  initializeFirebase()

  const ref = firebase.database().ref(name)

  ref.on(
    'value',
    snapshot => callback(snapshot.val()),
    errorObject => {
      // eslint-disable-next-line no-console
      console.log('The read failed: ' + errorObject.code)
    }
  )
}
