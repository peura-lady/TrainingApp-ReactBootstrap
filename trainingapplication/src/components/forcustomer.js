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
            headerName: "Date", field: 'date', sortable: true, filter: true, floatingFilter: true, maxWidth: 100,
            cellStyle: { fontWeight: '400'},
            cellRendererFramework: () => (Dayjs().format('DD/MM/YY'))
        },
        {
            headerName: "Duration in min", field: 'duration', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Activity", field: 'activity', filter: true, sortable: true, floatingFilter: true, maxWidth: 180,
            cellStyle: { textAlign: 'left', fontWeight: '400' }
        },
        {
            headerName: "First Name", field: 'firstname', filter: true, sortable: true, floatingFilter: true,
            cellStyle: { textAlign: 'left' }
        },
        {
            headerName: "City", field: 'city', sortable: true, filter: true, floatingFilter: true,
            cellStyle: { textAlign: 'left', color: 'red', fontWeight: '400' }
        },
        {
            headerName: "Email", field: 'email', sortable: true, filter: true, floatingFilter: true,
            cellStyle: { textAlign: 'left', fontWeight: '400' }
        },
        {
            headerName: "Phone", field: 'phone', sortable: true, filter: true, floatingFilter: true,
            cellStyle: { textAlign: 'left', fontWeight: '400' }
        },
    ]

    return (
        <div>

            <div className="ag-theme-bootstrap" style={{ width: 1400, height: 700, fontWeight: '700' }}>

                <AgGridReact
                    rowData={trainings}
                    columnDefs={columns}
                    enableRangeSelection={true}
                    defaultColDef={{ resizable: true }}

                // pagination={true}
                // paginationPageSize={8}
                />

            </div>


        </div>

    )
}

export default ForCustomers;