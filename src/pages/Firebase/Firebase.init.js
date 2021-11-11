import {initializeApp}from 'firebase/app';
import firebaseConfig from './Firebase.cofig';



const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;