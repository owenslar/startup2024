import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div>
    <header>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="favicon-2.ico" alt="logo" style={{ width: '30px', height: '30px' }} />
                    BookATeeTime<sup>&reg;</sup>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapseNavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="book.html">Book a Tee Time</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="data.html">Your Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>App components go here</main>

    <footer className="bg-primary text-white-50">
        <div className="container-fluid">
            <span className="text-reset">Owen Larson</span>
            <a className="text-reset" href="https://github.com/owenslar/startup2024">GitHub Repository</a>
        </div>
    </footer>
  </div>
  );
}
