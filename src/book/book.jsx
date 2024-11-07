import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeeTimeContext } from '../app';
import './book.css';

export function Book(props) {
    const navigate = useNavigate();
    const [teeTimes, setTeeTimes] = useState([]);
    const { bookedTeeTimes, setBookedTeeTimes } = useContext(TeeTimeContext);

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

            const filteredData = data.filter(teeTime => !bookedTeeTimes.some(booked => booked.id === teeTime.id));
            
            setTeeTimes(filteredData);


            filteredData.forEach(async (teeTime) => {
                const weather = await fetchWeatherData(teeTime.course);
                setTeeTimes(prevTeeTimes => prevTeeTimes.map(t =>t.id === teeTime.id ? { ...t, weather } : t));
            });
        };

        fetchTeeTimes();
    }, [bookedTeeTimes]);

    function handleBook(teeTime) {
        const updatedBookedTeeTimes = [...bookedTeeTimes, teeTime];
        const updatedTeeTimes = teeTimes.filter(t => t.id !== teeTime.id);

        setBookedTeeTimes(updatedBookedTeeTimes);
        setTeeTimes(updatedTeeTimes);

        navigate('/data', { state: { bookedTeeTimes: updatedBookedTeeTimes } });
    }

  return (
    <main className="container-fluid text-center bg-secondary">
        <div className="text-right text-primary">
            Signed in as:
            <span className="login-username"> {props.userName}</span>
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