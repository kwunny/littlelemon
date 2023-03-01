import React from 'react';
import "./styles/form.css";
import BookingForm from './BookingForm.js';

const Booking = () => {
  
    return (
      <>
      <div className="formcontainer yellow">
      <div className="formheader">
        <div className="title1"><h1>1. Fill Form</h1></div>
        <div className="title1"><h1>2. Reserve Table(s)</h1></div>
      </div>
      <div className="formbox">
        <div className="reserveform">
        <form>
          <BookingForm />
        </form>
        </div>
        <div className="reservetable"></div>
        </div>
      </div>
      </>
    )
  }

  export default Booking