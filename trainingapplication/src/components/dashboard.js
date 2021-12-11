// import React, {useState, useEffect} from 'react';
import React from 'react';
import Weather from './weather';
import Events from './events';

function Dashboard() {
    return(
        <div>
            <div style={{marginTop: '20px', marginLeft: '80%'}}>
               <Weather />  
            </div>
            <div style={{marginTop: '-185px', marginLeft: '100px'}}>
                <h2>Welcome Back!</h2>
            </div>
            <div>
                <h5 style={{marginTop: '20px', marginLeft: '45%', marginBottom: '35px'}}>See your nearest Events</h5>
                <Events />
            </div>
            
            
        </div>
    )
}

export default Dashboard;