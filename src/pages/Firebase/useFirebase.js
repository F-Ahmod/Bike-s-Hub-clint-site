import intializeFirebase from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {

  const [loading, setLoading] = useState(true);
     const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
   
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const singinWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from || '/';
                history.replace(destination);
        setUser(result.user);
        sessionStorage.setItem("email", result.user.email);
       
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  };

  const loginUser = (email, password, location, history) => {
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  setAuthError('');
                 
                  const destination = location?.state?.from || '/';
                  history.replace(destination);
                })
                .catch((error) => {
                    setAuthError(error.message);
                })
                .finally(() => setLoading(false));
        }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log(uid);
      } 
    })
  }, []);

  const leLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => setLoading(false));
  };

  const handleUserRegister = (email, password,location, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        
        console.log(result.user);
        
        hanldeUserInfoRegister(result.user.email);
        alert('register sucessfully')
        history.push(location?.state?.from || "/home");
      })
      .catch((error) => {
        
      }).finally(() => setLoading(false));
      
     
      
       
  };

  
  const hanldeUserInfoRegister = (email) => {
    fetch("https://young-bayou-81881.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  useEffect(() => {
    fetch(`https://young-bayou-81881.herokuapp.com/checkAdmin/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data[0]?.role))
}, [user?.email])

  

  return {
    error,
    admin,
    singinWithGoogle,
    user,
    leLogout,
    handleUserRegister,
    loginUser,
    authError,
    loading
  };
};

export default useFirebase;