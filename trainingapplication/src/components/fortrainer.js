import React, { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Toast } from 'react-bootstrap';
import Delete from 'react-bootstrap-icons/dist/icons/trash'

function ForTrainers() {

    const [customers, setCustomers] = useState([]);
    // const [open, setOpen] = useState(true);

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

    // const deleteCustomer = url => {
    //     if (window.confirm('Are you sure?')) {
    //         fetch(url, { method: 'DELETE' })
    //             .then(response => {
    //                 if (response.ok) {
    //                     setOpen(!open);
    //                     fetchCustomers();
    //                 }
    //                 else {
    //                     alert('Something went wrong')
    //                 }
    //             })
    //             .catch((err) => console.log(err));
    //     }
    // };

    const deleteCustomer = url => {
        console.log(url);
    };

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
        {
            headerName: "",
            filter: false,
            sortable: false,
            width: 120,
            field: "links[0].href",
            cellRendererFramework: (params) => (
                // <Button style={{ height: '10', width: '70px', backgroundColor: '#bd3a57', border: '1px solid #bd3a57', paddingTop: '0px', alignItems: 'right', outline: 'none' }}
                //     onClick={() => deleteCustomer(params.value)}>
                //     <Delete style={{ fontSize: '15px' }} />
                // </Button>

                <Button 
                    onClick={() => deleteCustomer(params)}>
                    <Delete style={{ fontSize: '15px' }} />
                </Button>

            )
        },
    ]

    return (

        <div >
            <div className="ag-theme-bootstrap" style={{ width: 1350, height: 700, fontWeight: '700', lineHeight: '43px', paddingLeft: '185px' }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={columns}
                    enableRangeSelection={true}
                    defaultColDef={{ resizable: true }}

                // pagination={true}
                // paginationPageSize={8}
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

export default ForTrainers;