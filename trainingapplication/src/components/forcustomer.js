import React, { useState, useEffect } from 'react';
// import {AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Activity from '.../react-bootstrap-icons/dist/icons/bicycle';
// import Calendar from '.../react-bootstrap-icons/dist/icons/calendar2-date';
// import Time from '.../react-bootstrap-icons/dist/icons/stopwatch';
// import Customer from '.../react-bootstrap-icons/dist/icons/person-circle';
// import City from '.../react-bootstrap-icons/dist/icons/geo-alt';
// import Email from '.../react-bootstrap-icons/dist/icons/envelope-open';
// import Phone from '.../react-bootstrap-icons/dist/icons/telephone';


import Table from 'react-bootstrap/Table';


function ForCustomers() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(responseData => setTrainings(responseData.content))
            .catch(err => console.error(err))
    }, [])

    const columns = trainings.map((content, index) =>
        <tr key={index}>
            <td>{content.date}</td>
            <td>{content.duration}</td>
            <td>{content.activity}</td>
            <td>{content.firstname}</td>
            {/* <td>{content.activity}</td> */}
            {/* <td>{content.activity}</td> */}
        </tr>
    )

    return (
        <div>
            <Table responsive>
                <thead >
                    <tr style={{ fontSize: '18px', alignItems: 'center' }}>
                        {/* <th>Date <Calendar /></th>
                        <th>Duration <Time /></th>
                        <th>Activity <Activity /></th>
                        <th>Customer <Customer /></th>
                        <th>City <City /></th>
                        <th>Email <Email /></th>
                        <th>Phone <Phone /></th> */}

                    </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                    {columns}
                </tbody>
            </Table>

            {/* <AgGridReact
            rowData={trainings}
            columnDefs={columns}
            // pagination={true}
            // paginationPageSize={8}
            /> */}

        </div>
    )
}

export default ForCustomers;