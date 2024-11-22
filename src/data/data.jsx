import React, { useContext, useState, useEffect } from 'react';
import { TeeTimeContext } from '../app';

import './data.css';

export function Data(props) {
    const { refreshData, setRefreshData } = useContext(TeeTimeContext);
    const [bookedTeeTimes, setBookedTeeTimes] = React.useState([]);

    useEffect(() => {
        const fetchBoookedTeeTimes = async () => {
            try {
                const response = await fetch('/api/reservations', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch reservations');
                }

                const data = await response.json();
                // console.log('Fetched booked tee times:', data.data);
                setBookedTeeTimes(data.data);
            } catch {
                console.error('Error fetching booked tee times:', error);
            }
        };

        fetchBoookedTeeTimes();
    }, [refreshData]);


    const handleCancel = async (teeTime) => {
        try {
            const response = await fetch('/api/reservations/cancel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ teeTimeId: teeTime.id }),
            });

            if (!response.ok) {
                throw new Error('Failed to cancel reservation');
            }

            const result = await response.json();
            // console.log('Reservation cancelled:', result);

            setRefreshData((prev) => prev + 1);
            setBookedTeeTimes((prev) => prev.filter((t) => t.id !== teeTime.id));
        } catch {
            console.error('Error cancelling reservation:', error);
        }
    };

  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="text-right text-primary">
            Signed in as:
            <span className="login-username"> {props.userName}</span>
        </div>
        <h2 className="text-primary">Your Reservations</h2> <br />
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
                            bookedTeeTimes.map((reservation, index) => {
                                const teeTime = reservation.teeTime; // Extract the teeTime object
                                return (
                                    <tr key={index}>
                                        <td>{teeTime.status}</td>
                                        <td>{teeTime.date}</td>
                                        <td>{teeTime.time}</td>
                                        <td><a href={teeTime.link}>{teeTime.course}</a></td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => handleCancel(teeTime)}>Cancel</button></td>
                                    </tr>
                                );
                            })
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