import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCrsMUP7URUWmwGsiFQcpfxlmrS4zZwzys',
	authDomain: 'event-management-5b22c.firebaseapp.com',
	projectId: 'event-management-5b22c',
	storageBucket: 'event-management-5b22c.appspot.com',
	messagingSenderId: '938883990899',
	appId: '1:938883990899:web:ff2d4c9f6bf911bb223106',
	measurementId: 'G-6958BZYX0Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
