import GoogleButton from "react-google-button"
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


function ContinueWithGoogle() {

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY_FIREBASE,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
    projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE,
    appId: import.meta.env.VITE_APP_ID_FIREBASE,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE
  };
  
  const app = initializeApp(firebaseConfig);
  
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // O token de acesso do Google pode ser acessado aqui
        if(result.credential) console.log(result.credential.accessToken
        );
        console.log(result)
        // As informações do usuário podem ser acessadas aqui
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Lidar com os erros aqui
        console.error(error);
      });
  }

  return (
    <GoogleButton style={{width: '100%'}} label="Continue com Google" onClick={signInWithGoogle}/>
  )
}

export default ContinueWithGoogle