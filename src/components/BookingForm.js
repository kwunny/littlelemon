import { useState, useReducer } from 'react';
import "./styles/form.css";

const BookingForm = () => {
    const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const initializeTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
    };

    const updateTimes = (state, selectedDate) => {
        // TODO: Update the available times based on the selected date
        // For now, we will just return the initial times.
        return initializeTimes();
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const handleDateChange = (event) => {
        setDate(event.target.value);
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
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
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
        <input type="submit" value="Make Your reservation" className="button"/>
      </form>
    )
  }
export default BookingForm