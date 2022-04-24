import "./Login.css";
import { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <div className="loginWrapper">
            <div className="loginInnerWrapper">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="innerFormLogin">
                        <h2>Welcome back!</h2>
                        <h3>Please enter your credentials to login.</h3>
                        <label for="Username">Username</label>
                        <input id="Username" onChange={e => setUsername(e.target.value)}/>
                        <label for="Password">Password</label>
                        <input id="Password" type="password" onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="loginButton">Login</button>
                        <h5>Don't have an account? <Link path="/register">Register</Link></h5>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;