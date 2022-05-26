import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios"

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const LOGIN_URL = "http://localhost:8080/questions"

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const enabled = response?.data?.enabled;
            // setAuth({ username, password, enabled});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err.response) {
                setErrMsg('Błąd połączenia z serwerem');
            } else if (err.response.status === 400) {
                setErrMsg('Brak loginu lub hasła');
            } else if (err.response.status === 401) {
                setErrMsg('Bład autoryzacji');
            } else {
                setErrMsg('Bład logowania');
            }
            errRef.current.focus();
        }
    }

    return (
<>
            {success ? (
                <section>
                    <h1>Jesteś zalogowany</h1>
                    <br />
                    <p>
                        <a href="http://localhost:3000/">Odśwież</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Zaloguj się</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Login:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Hasło:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Zaloguj się</button>
                    </form>
                </section>
            )}
        </>
    )
}

export default Login
