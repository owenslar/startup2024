import React from 'react';
import './data.css';

export function Data() {
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
                            <th></th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Edit Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Reserved</td>
                            <td>October 5, 2024</td>
                            <td>10:05 am</td>
                            <td><a href="https://www.sleepyridgegolf.com">The Links At Sleepy Ridge, Orem, Utah</a></td>
                            <td><button type="button" className="btn btn-primary">Change</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Reserved</td>
                            <td>October 6, 2024</td>
                            <td>12:15 pm</td>
                            <td><a href="https://www.riversidecountryclub.org">Riverside Country Club, Provo, Utah</a></td>
                            <td><button type="button" className="btn btn-primary">Change</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cancelled</td>
                            <td>September 28, 2024</td>
                            <td>9:30 am</td>
                            <td><a href="https://www.timpanogosgolf.com">Timpanogos Golf Club, Provo, Utah</a></td>
                            <td><button type="button" className="btn btn-primary">Change</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </main>
  );
}