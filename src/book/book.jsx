import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeeTimeContext } from '../app';
import './book.css';

export function Book(props) {
    const navigate = useNavigate();
    const [teeTimes, setTeeTimes] = useState([]);
    const { refreshData, setRefreshData } = useContext(TeeTimeContext);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,weather_code`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Full Weather Data:', data); // Logs the full response
    
            // Access temperature and humidity directly from 'data.current'
            const currentWeather = {
                temperature: data.current.temperature_2m,
                humidity: data.current.relative_humidity_2m
            };
            return currentWeather;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return { temperature: 'Error', humidity: 'Error' };
        }
    }

    useEffect(() => {
        const fetchTeeTimes = async () => {
            try {
                // Fetching tee time data from the backend
                // console.log("Fetching tee times...");
                const response = await fetch('/api/teeTimes', {
                    method: 'GET',
                    credentials: 'include', // Include cookies in the request
                });
                // console.log("Response:", response);
                const data = await response.json();
                      
                const teeTimesData = data.data
                    
                setTeeTimes(teeTimesData);
    
                for (const teeTime of teeTimesData) {
                    const weather = await fetchWeatherData(teeTime.latitude, teeTime.longitude);
                    setTeeTimes(prevTeeTimes => prevTeeTimes.map(t => t.id === teeTime.id ? { ...t, weather } : t));
                }
            } catch (error) {
                console.error('Error fetching tee times:', error);
            }
        };

        fetchTeeTimes();
    }, [refreshData]);

    const handleBook = async (teeTime) => {
        try {
            // Send POST request to book the tee time
            const response = await fetch('/api/teeTimes/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ teeTimeId: teeTime.id }),
            });

            if (!response.ok) {
                throw new Error('Failed to book tee time');
            }

            const data = await response.json();
            // console.log('Tee time booked:', data);

            // Update the teeTimes list to remove the booked tee time
            setTeeTimes((prevTeeTimes) => prevTeeTimes.filter(t => t.id !== teeTime.id));

            // Trigger the refresh by updating refreshData
            setRefreshData(prev => prev + 1);

            navigate('/data'); 
        } catch (error) {
            console.error('Error booking tee time:', error);
        }
    };

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
                        <p className="card-text">Temperature: {teeTime.weather?.temperature}°C, Humidity: {teeTime.weather?.humidity}%</p>
                        <input type="button" value="Book" className="btn btn-primary" onClick={() => handleBook(teeTime)} />
                    </div>
                </div>
            ))}
        </div>
        <br />
    </main>
    );
}