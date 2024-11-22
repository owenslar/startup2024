import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Book } from './book/book';
import { Data } from './data/data';
import { About } from './about/about';
import { AuthState } from './login/authState';

export const TeeTimeContext = createContext();

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [refreshData, setRefreshData] = useState(false);

  return (
    <TeeTimeContext.Provider value={{ refreshData, setRefreshData }}>
      <BrowserRouter>
        <div className="body">
          <header>
            <nav className="navbar navbar-expand-md bg-primary navbar-dark">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="">
                  <img src="favicon-2.ico" alt="logo" className="favimg" />
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
                    {authState === AuthState.Authenticated && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="book">Book a Tee Time</NavLink>
                      </li>
                    )}
                    {authState === AuthState.Authenticated && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="data">Your Reservations</NavLink>
                      </li>
                    )}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="about">About</NavLink>
                    </li>
                  </ul>
                  <ul className="navbar-nav ms-auto">
                    {authState === AuthState.Authenticated && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="">Account</NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <Routes>
            <Route 
              path='/' 
              element={
                <Login 
                  userName={userName} 
                  authState={authState} 
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              } 
              exact 
            />
            <Route path='/book' element={<Book userName={userName} />} />
            <Route path='/data' element={<Data userName={userName} />} />
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
    </TeeTimeContext.Provider>
  );
}

function NotFound() {
  return <h2>Page not found</h2>;
}