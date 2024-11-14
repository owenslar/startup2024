import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeeTimeContext } from '../app';
import './book.css';

export function Book(props) {
    const navigate = useNavigate();
    const [teeTimes, setTeeTimes] = useState([]);
    const { bookedTeeTimes, setBookedTeeTimes } = useContext(TeeTimeContext);

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
            try{
                // Fetching tee time data from the backend
                const response = await fetch('/api/teeTimes');
                const data = await response.json();
                      
                const teeTimesData = data.data
    
                const filteredData = teeTimesData.filter(teeTime => !bookedTeeTimes.some(booked => booked.id === teeTime.id));
                    
                setTeeTimes(filteredData);
    
                for (const teeTime of filteredData) {
                    const weather = await fetchWeatherData(teeTime.latitude, teeTime.longitude);
                    setTeeTimes(prevTeeTimes => prevTeeTimes.map(t => t.id === teeTime.id ? { ...t, weather } : t));
                }
            } catch (error) {
                console.error('Error fetching tee times:', error);
            }
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