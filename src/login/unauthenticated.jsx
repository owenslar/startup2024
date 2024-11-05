import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <>
            <div className="login">
                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <Button type="submit" className="login-button" variant="primary">
                    Login
                </Button>
                <Button type="submit" variant="secondary">
                    Create
                </Button>
            </div>
        </>
    );  
}
