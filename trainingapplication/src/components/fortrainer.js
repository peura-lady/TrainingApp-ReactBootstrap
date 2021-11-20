import React, { useState, useEffect } from 'react';
import AddCustomer from './addCustomer';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Toast } from 'react-bootstrap';
import Delete from 'react-bootstrap-icons/dist/icons/trash'

function ForTrainers() {

    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(true);
    const toggleSetOpen = () => setOpen(!open);

    //     const handleClose = () => {
    //     setOpen(false);
    // }

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => {
                setCustomers(data.content)
            })
            .catch(err => console.error(err))
            
    };

    const deleteCustomer = url => {
        if (window.confirm('Are you sure?')) {
            fetch(url, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setOpen(!open);
                        fetchCustomers();
                    }
                    else {
                        alert('Something went wrong')
                    }
                })
                .catch((err) => console.log(err));
        }
    };
    
    // const addCar = car => {
    //     fetch('http://carrestapi.herokuapp.com/cars/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(car)
    //     })
    //         .then(response => fetchCars())
    //         .catch((err) => console.log(err));
    // }

        const addCustomer = href => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(href)
        })
            .then(response => fetchCustomers())
            .catch((err) => console.log(err));
    }

    const columns = [
        {
            headerName: "Name", field: 'firstname', filter: true, sortable: true, floatingFilter: true, maxWidth: 190,
            cellStyle: { fontWeight: '600', fontSize: '17px' }
        },
        {
            headerName: "Surname", field: 'lastname', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '600', fontSize: '17px' }
        },
        {
            headerName: "Street adress", field: 'streetaddress', filter: true, sortable: true, floatingFilter: true, maxWidth: 200,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Post Code", field: 'postcode', filter: true, sortable: true, floatingFilter: true, maxWidth: 140,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "City", field: 'city', filter: true, sortable: true, floatingFilter: true, maxWidth: 120,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Email", field: 'email', filter: true, sortable: true, floatingFilter: true, maxWidth: 200,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
        },
        {
            headerName: "Phone", field: 'phone', filter: true, sortable: true, floatingFilter: true, maxWidth: 160,
            cellStyle: { fontWeight: '400', fontSize: '17px' }
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
            <AddCustomer addCustomer={addCustomer} />
            <div className="ag-theme-bootstrap" style={{ width: 1550, height: 600, fontWeight: '700', lineHeight: '43px', fontSize: '19px', paddingLeft: '140px', paddingTop: '10px'}}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={columns}
                    enableRangeSelection={true}
                    defaultColDef={{ resizable: true }}
                    rowHeight={60}
                    pagination={true}
                    paginationPageSize={8}
                />
            </div>

                {/* <Toast show={open} delay={3000} autohide onClose={deleteCustomer}>

                    <Toast.Body>Your Customer was deleted</Toast.Body>
                </Toast> */}

                {/* <Toast show={open} delay={3000} onClose={handleClose} style={{marginButton: '10px'}}> */}
                <Toast show={open} delay={3000} autohide onClose={toggleSetOpen} style={{ marginButton: '10px' }}>

                    <Toast.Body>Your Customer was deleted</Toast.Body>
                </Toast>

            <div>
            


            </div>


        </div>
    )
}

export default ForTrainers;