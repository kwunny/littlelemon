import React, { useState, useReducer, useEffect } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const initializeTimes = async () => {
        const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');
        const api = await response.text();
        const fetchData = new Function(api + '; return fetchAPI;')();
        const availableTimes = fetchData(new Date());
        dispatch({ type: 'UPDATE_TIMES', availableTimes });
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
        case 'UPDATE_TIMES':
        return action.availableTimes;
        default:
        return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
    if (date) {
        initializeTimes();
    }
    }, [date]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
        setTime('');
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value));
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    return (
    <form>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange} disabled={!date}>
            {availableTimes.map((time) => (
            <option key={time}>{time}</option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" className="button" />
    </form>
    );
};

export default BookingForm;