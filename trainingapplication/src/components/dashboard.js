import React from 'react';
import Weather from './weather';
import TrainingCalendar from './calendar';

function Dashboard() {
    return (
        <div>
            <div style={{ marginTop: '20px', marginLeft: '80%' }}>
                <Weather />
            </div>
            <div style={{ marginTop: '-145px', marginLeft: "46%" }}>
                <h2>Welcome Back!</h2>
            </div>
            <div>
                <h5 style={{ marginLeft: '45%', marginTop: '105px', marginBottom: '65px', fontSize: '22px', fontWeight: '700' }}>See your nearest Events</h5>
                <TrainingCalendar
                    style={{ marginLeft: '45%', fontSize: '20px' }} />
            </div>


        </div>
    )
}

export default Dashboard;