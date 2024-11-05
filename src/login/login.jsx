import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-fluid text-center bg-secondary loginspace">
        <div>
            {authState !== AuthState.Unknown && <h1 className="text-primary">Login</h1>}
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                userName={userName}
                onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, AuthState.Authenticated);
                }}
                />
            )}
        </div>
    </main>
  );
}
        // <div className="login">
        //     <h1 className="text-primary">Login</h1>
        //     <form method="get" action="book.html">
        //         <div className="input-group mb-3">
        //             <span className="input-group-text">Email</span>
        //             <input className="form-control" type="text" placeholder="your@email.com" />
        //         </div>
        //         <div className="input-group mb-3">
        //             <span className="input-group-text">Password</span>
        //             <input className="form-control" type="password" placeholder="password" />
        //         </div>
        //         <button type="submit" className="btn btn-primary login-button">Login</button>
        //         <button type="submit" className="btn btn-secondary">Create</button>
        //     </form>
        // </div>