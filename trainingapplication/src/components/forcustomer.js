import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

import 'bootstrap/dist/css/bootstrap.css';
import Dayjs from 'dayjs'

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

        {
            headerName: "Date", field: 'date', sortable: true, filter: true, floatingFilter: true, maxWidth: 138,
            cellRendererFramework: () => (Dayjs().format('DD/MM/YY'))
        },
        { headerName: "Duration in min", field: 'duration', filter: true, sortable: true, floatingFilter: true, maxWidth: 130 },
        { headerName: "Activity", field: 'activity', filter: true, sortable: true, floatingFilter: true },
        { headerName: "First Name", field: 'firstname', filter: true, sortable: true, floatingFilter: true },
        { headerName: "City", field: 'city', sortable: true, filter: true, floatingFilter: true },
        { headerName: "Email", field: 'email', sortable: true, filter: true, floatingFilter: true },
        { headerName: "Phone", field: 'phone', sortable: true, filter: true, floatingFilter: true },
    ]

    return (
        <div>

            <div className="ag-theme-bootstrap" style={{ width: 1350, height: 700 }}>

                <AgGridReact
                    rowData={trainings}
                    columnDefs={columns}
                    enableRangeSelection={true}

                // pagination={true}
                // paginationPageSize={8}
                />

            </div>


        </div>

    )
}

export default ForCustomers;