import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="login">
            <h1 className="text-primary">Login</h1>
            <form method="get" action="book.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input className="form-control" type="text" placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>
        </div>
    </main>
  );
}