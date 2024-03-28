
import React, { useState } from 'react';
import Nav from "../components/Header";
import './Events.css';

const ButtonComponent = ({ initialText, alternateText, onClick }) => {
  const [buttonText, setButtonText] = useState(initialText);

  const handleClick = () => {
    onClick(); // Call the parent component's onClick handler
    setButtonText(buttonText === initialText ? alternateText : initialText);
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};

const Popup = ({ onClose, children }) => {
  return (
    <div className="popup-1">
      <div className="popup-inner">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function Events() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [joinButtonText, setJoinButtonText] = useState('Join');

  const handleJoinEvent = () => {
    // Logic for joining the event goes here
    console.log("Joined event:", currentEvent);
    setJoinButtonText('Joined');
  };

  const handleShowDetails = (event) => {
    setCurrentEvent(event);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="title">Events</div>

        <div className="all-events">
          <div className="event">
            <div className="event-name">Meet up in Gresham Street</div>
            <div className="event-details">Date: 28th March 2024 <br/> Time: 4:30pm <br/> Location: 99 Gresham Street</div>
            <ButtonComponent 
              initialText="Join" 
              alternateText="Joined" 
              onClick={handleJoinEvent} 
            />
            <button 
              onClick={() => handleShowDetails("Meet up in Gresham Street")}
            >
              {popupVisible && currentEvent === "Meet up in Gresham Street" ? "" : "Details"}
            </button>
            {popupVisible && currentEvent === "Meet up in Gresham Street" && (
              <Popup onClose={handleClosePopup}>
                <h2>Meet up in Gresham Street Details</h2>
                <p>Join other carers for mothers for this coffee event.</p>
              </Popup>
            )}
          </div>
 
          <div className="event">
            <div className="event-name">Wine and paint</div>
            <div className="event-details">Date: 28th May 2024 <br/> Time: 6pm <br/> Location: Local pub</div>
  
            <ButtonComponent 
              initialText="Join" 
              alternateText="Joined" 
              onClick={handleJoinEvent} 
            />
            <button 
              onClick={() => handleShowDetails("Wine and Paint")}
            >
              {popupVisible && currentEvent === "Wine and Paint" ? "" : "Details"}
            </button>
            {popupVisible && currentEvent === "Wine and Paint" && (
              <Popup onClose={handleClosePopup}>
                <h2>Wine and Paint Details</h2>
                <p>Unleash your creativity at our wine and paint event, where you can sip on fine wines and express your artistic flair on canvas. Join us for an evening of laughter, relaxation, and inspiration as you indulge in a delightful painting experience guided by our talented instructors.</p>
              </Popup>
            )}
          </div>

          <div className="event">
  <div className="event-name">Morning Yoga</div>
  <div className="event-details">Date: 12th April 2024 <br/> Time: 9:00am <br/> Location: Victoria Park</div>
  <ButtonComponent 
    initialText="Join" 
    alternateText="Joined" 
    onClick={handleJoinEvent} 
  />
  <button 
    onClick={() => handleShowDetails("Morning Yoga")}
  >
    {popupVisible && currentEvent === "Morning Yoga" ? "" : "Details"}
  </button>
  {popupVisible && currentEvent === "Morning Yoga" && (
    <Popup onClose={handleClosePopup}>
      <h2>Morning Yoga Details</h2>
      <p>Join us for a revitalizing morning yoga session tailored for mother carers, designed to cultivate peace, strength, and rejuvenation. Start your day with mindful movement and relaxation, providing a nurturing space for self-care and well-being..</p>
    </Popup>
  )}
</div>
        </div>
      </div>

      <Nav />
    </>
  );
}

