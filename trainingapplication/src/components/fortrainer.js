import React, { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function ForTrainers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.error(err))
    }, [])

    const columns = [
        // {field: 'id'},
        { headerName: "Name", field: 'firstname', width: 120 },
        { headerName: "Surname", field: 'lastname', width: 120 },
        { headerName: "Street adress", field: 'streetadress', width: 120 },
        { headerName: "Post Code", field: 'postcode', width: 120 },
        { headerName: "City", field: 'city', width: 120 },
        { headerName: "Email", field: 'email', width: 120 },
        { headerName: "Phone", field: 'phone', width: 120 },
    ]

      return (

        
      
            <div className="ag-theme-bootstrap" >

                
                <AgGridReact
                    
                    rowData={customers}
                    columnDefs={columns}

                    multiSortKey={'ctrl'}
                      
                />
{/* 
          <AgGridColumn field="firstname" width={100} />
          <AgGridColumn field="lastname" width={100} />
          <AgGridColumn field="streetadress" width={100} /> */}

            </div>
    )
}

export default ForTrainers;