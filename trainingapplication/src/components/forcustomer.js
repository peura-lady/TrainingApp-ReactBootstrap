import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

import 'bootstrap/dist/css/bootstrap.css';
// import Activity from 'react-bootstrap-icons/dist/icons/activity'
// import Calendar from '.../react-bootstrap-icons/dist/icons/calendar2-date';
// import Time from '.../react-bootstrap-icons/dist/icons/stopwatch';
// import Customer from '.../react-bootstrap-icons/dist/icons/person-circle';
// import City from '.../react-bootstrap-icons/dist/icons/geo-alt';
// import Email from '.../react-bootstrap-icons/dist/icons/envelope-open';
// import Phone from '.../react-bootstrap-icons/dist/icons/telephone';



function ForCustomers() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => {
                setTrainings(data.content)
                console.log(data.content)
            })
            .catch(err => console.error(err))
    }, [])


    const columns = [
        // {field: 'id'},
        { headerName: "Date", field: 'date', },
        { headerName: "Duration", field: 'duration' },
        { headerName: "Activity", field: 'activity' },
        { headerName: "First Name", field: 'firstname' },
        { headerName: "City", field: 'city' },
        { headerName: "Email", field: 'email', },
        { headerName: "Phone", field: 'phone' },
    ]

    return (

        <div className="ag-theme-bootstrap" style={{ width: 1350, height: 700 }}>

            <AgGridReact
                rowData={trainings}
                columnDefs={columns}
                // pagination={true}
                // paginationPageSize={8}
            />

        </div>
    )
}

export default ForCustomers;