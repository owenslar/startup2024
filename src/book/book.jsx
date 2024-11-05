import React from 'react';
import './book.css';

export function Book() {
  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="text-right text-primary">
            Signed in as:
            <span className="text-right text-primary">Username</span>
        </div>
        <h2 className="text-primary">Available Tee Times</h2>
        <div className="container mt-3">
            <div className="card" style={{ width: '300px' }}>
                <div style={{ height: '300px', objectFit: 'cover' }}>
                    <img className="card-img-top img-fluid" alt="timpanogosGCimg" src="https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">Timpanogos Golf Club</h4>
                    <p className="card-text">Tomorrow, 9:30am</p>
                    <p className="card-text">$40</p>
                    <p className="card-text">2-4 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="linksatsleepyridgeimg" src="https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg" />
                <div className="card-body">
                    <h4 className="card-title">The Links at Sleepy Ridge</h4>
                    <p className="card-text">Tomorrow, 10:35am</p>
                    <p className="card-text">$55</p>
                    <p className="card-text">1 golfer</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="riversideCCimg" src="https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4" />
                <div className="card-body">
                    <h4 className="card-title">Riverside Country Club</h4>
                    <p className="card-text">Tomorrow, 12:45pm</p>
                    <p className="card-text">$65</p>
                    <p className="card-text">2-4 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="riversideCCimg" src="https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4" />
                <div className="card-body">
                    <h4 className="card-title">Riverside Country Club</h4>
                    <p className="card-text">Tomorrow, 1:15pm</p>
                    <p className="card-text">$65</p>
                    <p className="card-text">2-4 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="timpanogosGCimg" src="https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg" />
                <div className="card-body">
                    <h4 className="card-title">Timpanogos Golf Club</h4>
                    <p className="card-text">Tomorrow, 2:00pm</p>
                    <p className="card-text">$40</p>
                    <p className="card-text">2-4 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="linksatsleepyridgeimg" src="https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg" />
                <div className="card-body">
                    <h4 className="card-title">The Links at Sleepy Ridge</h4>
                    <p className="card-text">Tomorrow, 2:05pm</p>
                    <p className="card-text">$55</p>
                    <p className="card-text">2-4 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="riversideCCimg" src="https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4" />
                <div className="card-body">
                    <h4 className="card-title">Riverside Country Club</h4>
                    <p className="card-text">Tomorrow, 3:45pm</p>
                    <p className="card-text">$40</p>
                    <p className="card-text">1-2 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
            <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top img-fluid" alt="timpanogosGCimg" src="https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg" />
                <div className="card-body">
                    <h4 className="card-title">Timpanogos Golf Club</h4>
                    <p className="card-text">Tomorrow, 6:30pm</p>
                    <p className="card-text">$35</p>
                    <p className="card-text">1-2 golfers</p>
                    <p className="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" className="btn btn-primary" />
                </div>
            </div>
        </div>
        <br />
    </main>
  );
}