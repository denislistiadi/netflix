import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_kvaLWfaAzgdo4Y5FzOdNFQehHVclMSY",
    authDomain: "netflix-clone-indo.firebaseapp.com",
    projectId: "netflix-clone-indo",
    storageBucket: "netflix-clone-indo.appspot.com",
    messagingSenderId: "862532082678",
    appId: "1:862532082678:web:36d11a607d990a1994c5d7"
};

const firebase = Firebase.initializeApp(config);

export { firebase };