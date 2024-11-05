import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div className="login">
            <span className='text-primary'>{props.userName}</span>
                <Button variant="primary" onClick={() => navigate('/book')}>
                    Book
                </Button>
                <Button variant="secondary" onClick={() => logout()}>
                    Logout
                </Button>
        </div>
    );
}