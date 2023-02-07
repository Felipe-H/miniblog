import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firetbase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)

    //clenup
    // deal with memory leak
    const[cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
};