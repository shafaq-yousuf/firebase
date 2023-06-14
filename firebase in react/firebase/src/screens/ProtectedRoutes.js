import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from './firebasemethods';

const ProtectedRoutes = ({ Component }) => {
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth()
            .then((uid) => {
                console.log(uid, "user logged in")
            })
            .catch((err) => {
                console.log("err")
                navigate("/login")
            })
    }, [])
}
export default ProtectedRoutes;