import React, { useState, useEffect } from 'react';
import AddCustomer from './addCustomer';
import EditCustomer from './editCustomers';
import AddTraining from './addTraining';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Toast } from 'react-bootstrap';
import Delete from 'react-bootstrap-icons/dist/icons/trash'

import { CSVLink } from 'react-csv';

function ForTrainers() {

    const [customers, setCustomers] = useState([]);
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast)
    const [msg, setMsg] = useState('')

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
                        setMsg("Customer has been deleted sucessfully")
                        setShowToast(true);
                        fetchCustomers();
                    }
                    else {
                        alert('Something went wrong')
                    }
                })
                .catch((err) => console.log(err));
        }
    };

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

    const addTraining = href => {
        fetch('https://customerrest.herokuapp.com/gettrainings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(href)
        })
            .then(response => {
                setMsg("Customer has been deleted sucessfully")
                fetchCustomers()
            })
            .catch((err) => console.log(err));
    }

    const editCustomer = (link, updatedCustomer) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer)
        })
            .then(responce => {
                setMsg("Customer has been edited sucessfully")
                setShowToast(true);
                fetchCustomers();
            })
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
            sortable: false,
            filter: false,
            width: 120,
            field: "_links.0.href",
            cellRendererFramework: params => <EditCustomer editCustomer={editCustomer} row={params} />
        },
        {
            headerName: "",
            sortable: false,
            filter: false,
            width: 120,
            field: "_links.0.href",
            cellRendererFramework: params => <AddTraining addTraining={addTraining} row={params} />
        },
        {
            headerName: "",
            filter: false,
            sortable: false,
            width: 120,
            field: "links.0.href",
            cellRendererFramework: (params) => (
                <Button className="delete-btn"
                    style={{ height: '10', width: '70px', backgroundColor: '#bd3a57', border: '1px solid #bd3a57', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}
                    onClick={() => deleteCustomer(params.value)} >
                    <Delete style={{ fontSize: '15px' }} />
                </Button >
            )
        },
    ]
    return (
        <div >
            <div>
                <CSVLink style={{ marginLeft: '60px', color: "#b0b7df", fontWeight: '500', fontSize: '19px', marginTop: '10px', padding: '13px', background: 'rgb(220 231 242)', height: '70px', width: '230px', borderRadius: '5px' }} data={customers} separator=";">Export CSV</CSVLink>
                <AddCustomer addCustomer={addCustomer} />
            </div>
            <div className="ag-theme-bootstrap" style={{ width: '100%', height: 600, fontWeight: '700', lineHeight: '43px', fontSize: '19px', paddingLeft: '90px', paddingTop: '10px' }}>
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
            <Toast message={msg} show={showToast} delay={3000} autohide onClose={toggleShowToast} style={{ marginButton: '10px' }}>
                <Toast.Body>Your action with Customer is complete</Toast.Body>
            </Toast>
        </div>
    )
}

export default ForTrainers;