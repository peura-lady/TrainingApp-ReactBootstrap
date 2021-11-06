import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

import 'bootstrap/dist/css/bootstrap.css';
import Dayjs from 'dayjs'

import { Button, Toast } from 'react-bootstrap';
import Delete from 'react-bootstrap-icons/dist/icons/trash'

function ForCustomers() {

    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => {
                // setTrainings(data.content)
                setTrainings(data)
                // console.log(data.content)
            })
            .catch(err => console.error(err))
    };

    const deleteCustomer = url => {
        if (window.confirm('Are you sure?')) {
            fetch(url, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setOpen(!open);
                        fetchTrainers();
                    }
                    else {
                        alert('Something went wrong')
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    // const deleteCustomer = url => {
    //     console.log(url)
    //         };

    const columns = [
        
        {
            headerName: "Date", field: 'date', sortable: true, filter: true, floatingFilter: true, maxWidth: 190,
            cellStyle: { fontWeight: '400' },
            cellRendererFramework: () => (Dayjs().format('DD/MM/YY, H:mm'))
        },
        {
            headerName: "Min", field: 'duration', filter: true, sortable: true, floatingFilter: true, maxWidth: 100,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Activity", field: 'activity', filter: true, sortable: true, floatingFilter: true, maxWidth: 180,
            cellStyle: {  fontWeight: '600', fontSize: '17px' }
        },
        {
            headerName: "First Name", field: 'customer.firstname', filter: true, sortable: true, floatingFilter: true, maxWidth: 150,
            cellStyle: { textAlign: 'left', fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Last Name", field: 'customer.lastname', filter: true, sortable: true, floatingFilter: true, maxWidth: 150,
            cellStyle: { textAlign: 'left', fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "City", field: 'customer.city', sortable: true, filter: true, floatingFilter: true, maxWidth: 140,
            cellStyle: { textAlign: 'left', fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Email", field: 'customer.email', sortable: true, filter: true, floatingFilter: true, maxWidth: 190,
            cellStyle: { textAlign: 'left', fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Phone", field: "customer.phone", sortable: true, filter: true, floatingFilter: true, maxWidth: 150,
            cellStyle: { textAlign: 'left', fontWeight: '400', fontSize: '17px'}
        },
        {
            headerName: "",
            filter: false,
            sortable: false,
            width: 120,
            field: "links.0.href",
            cellRendererFramework: (params) => (
                <Button className="delete-btn" style={{ height: '10', width: '70px', backgroundColor: '#bd3a57', border: '1px solid #bd3a57', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}
                    onClick={() => deleteCustomer(params.value)}>
                    <Delete style={{ fontSize: '15px' }} />
                </Button>
            )
        },
    ]

    return (
        <div >
            <div className="ag-theme-bootstrap" style={{ width: 1600, height: 600, fontWeight: '700', lineHeight: '43px', fontSize: '19px', paddingLeft: '185px', paddingTop: '50px' }}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={columns}
                    enableRangeSelection={true}
                    defaultColDef={{ resizable: true }}
                    rowHeight={55}
                    pagination={true}
                    paginationPageSize={8}
                />
            </div>

            <div>

                {/* <Toast show={open} delay={3000} autohide onClose={deleteCustomer}>

                    <Toast.Body>Your Customer was deleted</Toast.Body>
                </Toast> */}


            </div>


        </div>

    )
}

export default ForCustomers;