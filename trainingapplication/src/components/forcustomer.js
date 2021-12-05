import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";

import 'bootstrap/dist/css/bootstrap.css';
import dayjs from 'dayjs'

import { Button, Toast } from 'react-bootstrap';
import Delete from 'react-bootstrap-icons/dist/icons/trash'
import AddTraining from './addTraining';

// import Calendar from 'react-calendar';

function ForCustomers() {

    const [trainings, setTrainings] = useState([]);
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast)

    const [msg, setMsg] = useState('')

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => {
                setTrainings(data)
            })
            .catch(err => console.error(err))
    };

    // const handleClose = () => {
    //     setOpen(false);
    // }

    const deleteTraining = url => {
        if (window.confirm('Are you sure?')) {
            fetch('https://customerrest.herokuapp.com/api/trainings/' + url, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setMsg("Customer has been deleted sucessfully")
                        setShowToast(true);
                        fetchTrainers();
                    }
                    else {
                        alert('Something went wrong')
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    // const addTraining = href => {
    //     fetch('https://customerrest.herokuapp.com/api/trainings/' + url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(href)
    //     })
    //         .then(response => fetchTrainers())
    //         .catch((err) => console.log(err));
    // }

    // const addTraining = url => {
    //     fetch('https://customerrest.herokuapp.com/api/trainings/' + url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(url)
    //     })
    //         .then(response => fetchTrainers())
    //         .catch((err) => console.log(err));
    // }

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
                fetchTrainers()
            })
            .catch((err) => console.log(err));
    }


    const columns = [
        
        {
            headerName: "Date", field: 'date', sortable: true, filter: true, floatingFilter: true, maxWidth: 190,
            cellStyle: { fontWeight: '400' },
            valueFormatter: (params) =>   dayjs(params.value).format('DD/MM/YY, H:mm')
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
            // field: "links.0.href",
            field: "id",
            cellRendererFramework: (params) => (
                <Button className="delete-btn" style={{ height: '10', width: '70px', backgroundColor: '#bd3a57', border: '1px solid #bd3a57', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}
                    onClick={() => deleteTraining(params.value) + {toggleShowToast}} >
                    <Delete style={{ fontSize: '15px' }} />
                </Button>
            )
        },
    ]

    return (
        <div >
             
             <AddTraining addTraining={addTraining} />
            <div className="ag-theme-bootstrap" style={{ width: 1575, height: 600, fontWeight: '700', fontSize: '19px', paddingLeft: '100px', marginTop: '50px'}}>
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

                {/* <Toast show={open} delay={3000} autohide onClose={handleClose}>

                    <Toast.Body>Your Customer was deleted</Toast.Body>
                </Toast> */}

                {/* <Toast show={open} delay={3000} onClose={handleClose} style={{marginButton: '10px'}}> */}
                {/* <Toast show={open} delay={3000} onClose={toggleSetOpen} style={{marginButton: '10px'}}> */}

          {/* <Toast.Body>Your Customer was deleted</Toast.Body>
        </Toast> */}

<Toast message={msg} show={showToast} delay={3000} autohide onClose={toggleShowToast} style={{ marginButton: '10px' }}>

<Toast.Body>Your Customer was deleted</Toast.Body>
</Toast>


            </div>


        </div>

    )
}

export default ForCustomers;