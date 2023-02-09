
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALXbrVLqE0TQ7BsX3uvWoHob6-hniAWhY",
  authDomain: "miniblog-26d37.firebaseapp.com",
  projectId: "miniblog-26d37",
  storageBucket: "miniblog-26d37.appspot.com",
  messagingSenderId: "1005622485986",
  appId: "1:1005622485986:web:61ecb6cbed4715eb554fbb"
};

const app = initializeApp(firebaseConfig);

// inicializamos o banco que salvará os dados:

const db = getFirestore(app)

//aqui exportamos o banco de dados para usarmos em outro lugar:

export { db };