import React, { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

function ForTrainers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => {
                setCustomers(data.content)
                console.log(data.content)
            })
            .catch(err => console.error(err))
    }, [])

    const columns = [
        {
            headerName: "Name", field: 'firstname', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Surname", field: 'lastname', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Street adress", field: 'streetaddress', filter: true, sortable: true, floatingFilter: true, maxWidth: 200,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Post Code", field: 'postcode', filter: true, sortable: true, floatingFilter: true, maxWidth: 120,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "City", field: 'city', filter: true, sortable: true, floatingFilter: true, maxWidth: 120,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Email", field: 'email', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400' }
        },
        {
            headerName: "Phone", field: 'phone', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400' }
        },
    ]

    return (

        <div className="ag-theme-bootstrap" style={{ width: 1350, height: 700 }}>

            <AgGridReact
                rowData={customers}
                columnDefs={columns}
                enableRangeSelection={true}
                defaultColDef={{ resizable: true }}

            // pagination={true}
            // paginationPageSize={8}
            />

        </div>
    )
}

export default ForTrainers;