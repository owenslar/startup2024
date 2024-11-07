import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './book.css';

export function Book() {
    const navigate = useNavigate();
    const [teeTimes, setTeeTimes] = useState([]);
    const [bookedTeeTimes, setBookedTeeTimes] = useState([]);

    const fetchWeatherData = async (course) => {
        // simulating a delay in fetching weather data
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 'Sunny';
    }

    useEffect(() => {
        const fetchTeeTimes = async () => {
            // simulating a fetch call to my database holding the tee time data
            const data = [
                {
                    id: 1,
                    course: 'Timpanogos Golf Club',
                    link: 'https://www.timpanogosgolf.com',
                    date: 'October 5',
                    time: '9:30am',
                    price: '$40',
                    golfers: '2-4 golfers',
                    weather: 'Loading...',
                    img: 'https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg',
                    status: 'Reserved'
                },
                {
                    id: 2,
                    course: 'The Links at Sleepy Ridge',
                    link: 'https://www.sleepyridgegolf.com',
                    date: 'October 6',
                    time: '10:35am',
                    price: '$55',
                    golfers: '1 golfer',
                    weather: 'Loading...',
                    img: 'https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg',
                    status: 'Reserved'
                },
                {
                    id: 3,
                    course: 'Riverside Country Club',
                    link: 'https://www.riversidecountryclub.org',
                    date: 'October 7',
                    time: '12:45pm',
                    price: '$65',
                    golfers: '2-4 golfers',
                    weather: 'Loading...',
                    img: 'https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4',
                    status: 'Reserved'
                },
                {
                    id: 4,
                    course: 'Riverside Country Club',
                    link: 'https://www.riversidecountryclub.org',
                    date: 'October 8',
                    time: '1:15pm',
                    price: '$65',
                    golfers: '2-4 golfers',
                    weather: 'Loading...',
                    img: 'https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4',
                    status: 'Reserved'
                },
                {
                    id: 5,
                    course: 'Timpanogos Golf Club',
                    link: 'https://www.timpanogosgolf.com',
                    date: 'October 9',
                    time: '3:30pm',
                    price: '$40',
                    golfers: '1-2 golfers',
                    weather: 'Loading...',
                    img: 'https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg',
                    status: 'Reserved'
                },
            ];

            setTeeTimes(data);


            data.forEach(async (teeTime) => {
                const weather = await fetchWeatherData(teeTime.course);
                setTeeTimes(prevTeeTimes => prevTeeTimes.map(t =>t.id === teeTime.id ? { ...t, weather } : t));
            });
        };

        fetchTeeTimes();
    }, []);

    function handleBook(teeTime) {
        const updatedBookedTeeTimes = [...bookedTeeTimes, teeTime];
        const updatedTeeTimes = teeTimes.filter(t => t.id !== teeTime.id);

        setBookedTeeTimes(updatedBookedTeeTimes);
        setTeeTimes(updatedTeeTimes);
        
        navigate('/data', { state: { bookedTeeTimes: [...bookedTeeTimes, teeTime] } });
    }

  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="text-right text-primary">
            Signed in as:
            <span className="text-right text-primary">Username</span>
        </div>
        <h2 className="text-primary">Available Tee Times</h2>
        <div className="container mt-3">
            {teeTimes.map(teeTime => (
                <div className="card" key={teeTime.id} style={{ width: '300px' }}>
                    <div style={{ height: '300px', objectFit: 'cover' }}>
                        <img className="card-img-top img-fluid" alt={teeTime.course} src={teeTime.img} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{teeTime.course}</h4>
                        <p className="card-text">{teeTime.date}, {teeTime.time}</p>
                        <p className="card-text">{teeTime.price}</p>
                        <p className="card-text">{teeTime.golfers}</p>
                        <p className="card-text">Current Weather: {teeTime.weather}</p>
                        <input type="button" value="Book" className="btn btn-primary" onClick={() => handleBook(teeTime)} />
                    </div>
                </div>
            ))}
        </div>
        <br />
    </main>
    );
}


{/* <div class="card" style="width:300px">
                <img class="card-img-top img-fluid" alt="timpanogosGCimg" src="https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg" />
                <div class="card-body">
                    <h4 class="card-title">Timpanogos Golf Club</h4>
                    <p class="card-text">Tomorrow, 2:00pm</p>
                    <p class="card-text">$40</p>
                    <p class="card-text">2-4 golfers</p>
                    <p class="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" class="btn btn-primary" />
                </div>
            </div>
            <div class="card" style="width:300px">
                <img class="card-img-top img-fluid" alt="linksatsleepyridgeimg" src="https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg" />
                <div class="card-body">
                    <h4 class="card-title">The Links at Sleepy Ridge</h4>
                    <p class="card-text">Tomorrow, 2:05pm</p>
                    <p class="card-text">$55</p>
                    <p class="card-text">2-4 golfers</p>
                    <p class="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" class="btn btn-primary" />
                </div>
            </div>
            <div class="card" style="width:300px">
                <img class="card-img-top img-fluid" alt="riversideCCimg" src="https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4" />
                <div class="card-body">
                    <h4 class="card-title">Riverside Country Club</h4>
                    <p class="card-text">Tomorrow, 3:45pm</p>
                    <p class="card-text">$40</p>
                    <p class="card-text">1-2 golfers</p>
                    <p class="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" class="btn btn-primary" />
                </div>
            </div>
            <div class="card" style="width:300px">
                <img class="card-img-top img-fluid" alt="timpanogosGCimg" src="https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg" />
                <div class="card-body">
                    <h4 class="card-title">Timpanogos Golf Club</h4>
                    <p class="card-text">Tomorrow, 6:30pm</p>
                    <p class="card-text">$35</p>
                    <p class="card-text">1-2 golfers</p>
                    <p class="card-text">Current Weather: Fair</p>
                    <input type="button" value="Book" class="btn btn-primary" />
                </div>
            </div> */}