import React from 'react';
import './EventsList.css';
import Events from '../Events/Events';

class EventsList extends React.Component {
    render() {
        return (
            <div className="EventList">
                <Events/>
                <Events/>
                <Events />
                <Events/>
            </div>
        )
    }
}

export default EventsList;