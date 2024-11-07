import React, { useContext } from 'react';
import { TeeTimeContext } from '../app';

import './data.css';

export function Data() {
    const { bookedTeeTimes, setBookedTeeTimes } = useContext(TeeTimeContext);

    const handleCancel = (teeTime) => {
        const updatedBookedTeeTimes = bookedTeeTimes.filter((time) => time.id !== teeTime.id);
        setBookedTeeTimes(updatedBookedTeeTimes);
    }

  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="text-right text-primary">
            Signed in as:
            <span className="text-right text-primary">Username</span>
        </div>
        <h2 className="text-primary">Your Reservation History</h2> <br />
            <div className="container-fluid text-center table-wrapper">
                <table className="table table-striped-columns border text-primary">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Edit Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedTeeTimes.length > 0 ? (
                            bookedTeeTimes.map((teeTime, index) => (
                                <tr key={index}>
                                    <td>{teeTime.status}</td>
                                    <td>{teeTime.date}</td>
                                    <td>{teeTime.time}</td>
                                    <td><a href={teeTime.link}>{teeTime.course}</a></td>
                                    <td><button type="button" className="btn btn-primary" onClick={() => handleCancel(teeTime)}>Cancel</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No reservations found</td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
    </main>
  );
}