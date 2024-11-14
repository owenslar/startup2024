import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {
                // logout failed. assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userName');
                props.onLogout();
            });
    }

    return (
        <div className="login">
            <h3 className='text-primary mb-3'>Signed in as: <span className="login-username">{props.userName}</span></h3>
            <div className="d-flex gap-1">
                    <Button variant="primary" onClick={() => navigate('/book')}>
                        Book
                    </Button>
                    <Button variant="secondary" onClick={() => logout()}>
                        Logout
                    </Button>
            </div>
        </div>
    );
}