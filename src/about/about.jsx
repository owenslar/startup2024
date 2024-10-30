import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <h3 className="text-primary about-top">About</h3>
        <div className="container">
            <p className="text-primary text-left">BookATeeTime is a website meant to make finding and reserving tee times from any course in your area very easy. The goal is to create a one stop shop where you can find any tee time in the area and reserve it all from this website. (Disclaimer: These tee times are fake, do not show up to these golf courses and expect to have a reserved tee time.)</p>
        </div>
    </main>
  );
}