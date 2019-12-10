import React from 'react';
import './Event.css';

const Event = {
    imageSrc:'./background_photo_emirates.jpg' ,
    name: 'Arsenal vs Manchester United' ,
    date: '12th December 2019',
    venue: 'The Emirates', 
    city: 'London'
}

class Events extends React.Component {
    render() {
        return  (
            <div className="Event">
                <div class="image-container">
                    <img src='./background_photo_emirates.jpg' alt='the emirates' />
                </div>
                <h2>{Event.name}</h2>
                <div className="Event-information">
                    <div className="Event-venue">
                        <p>{Event.date}</p>
                        <p>{Event.venue}</p>
                        <p>{Event.city}</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Events;