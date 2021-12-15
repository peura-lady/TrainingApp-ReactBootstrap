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

    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast)


    const [customers, setCustomers] = useState([])
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
        { field: 'firstname', width: 190, sortable: true, filter: true },
        { field: 'lastname', width: 160, sortable: true, filter: true },
        { field: 'streetaddress', width: 200, sortable: true, filter: true, cellStyle: { fontWeight: '400' } },
        { field: 'postcode', width: 140, sortable: true, filter: true, cellStyle: { fontWeight: '400' } },
        { field: 'city', width: 120, sortable: true, filter: true, cellStyle: { fontWeight: '400' } },
        { field: 'email', width: 200, sortable: true, filter: true, cellStyle: { fontWeight: '400' } },
        { field: 'phone', width: 160, sortable: true, filter: true, cellStyle: { fontWeight: '400' } },

        {
            headerName: '',
            sortable: false,
            filter: false,
            width: 120,
            field: 'links.0.href',
            cellRendererFramework: (params) => (
                <Button className="delete-btn"
                    style={{ height: '10', width: '70px', backgroundColor: '#bd3a57', border: '1px solid #bd3a57', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}
                    onClick={() => deleteCustomer(params.value)} >
                    <Delete style={{ fontSize: '15px' }} />
                </Button >
            ),
        },

        {
            headerName: '',
            sortable: false,
            filter: false,
            width: 120,
            field: 'links.0.href',
            cellRendererFramework: (params) => (
                <AddTraining addTraining={addTraining} row={params} />
            ),
        },

        {
            headerName: '',
            sortable: false,
            filter: false,
            width: 120,
            field: 'links.0.href',
            cellRendererFramework: (params) => (
                <EditCustomer editCustomer={editCustomer} row={params} />
            ),
        },
    ]




    return (
        <div >
            <div>
                <CSVLink style={{ marginLeft: '60px', color: "#b0b7df", fontWeight: '500', fontSize: '19px', marginTop: '10px', padding: '13px', background: 'rgb(220 231 242)', height: '70px', width: '230px', borderRadius: '5px' }} data={customers} separator=";">Export CSV</CSVLink>
                <AddCustomer addCustomer={addCustomer} />
            </div>
            <div className="ag-theme-bootstrap" style={{ width: '100%', height: 600, fontWeight: '700', lineHeight: '43px', fontSize: '19px', paddingTop: '10px' }}>
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

