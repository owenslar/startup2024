import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Book } from './book/book';
import { Data } from './data/data';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="">
                <img src="favicon-2.ico" alt="logo" style={{ width: '30px', height: '30px' }} />
                BookATeeTime<sup>&reg;</sup>
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapseNavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to=''>Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="book">Book a Tee Time</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="data">Your Reservations</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">Account</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/book' element={<Book />} />
          <Route path='/data' element={<Data />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-primary text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Owen Larson</span>
            <a className="text-reset" href="https://github.com/owenslar/startup2024">GitHub Repository</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h2>Page not found</h2>;
}