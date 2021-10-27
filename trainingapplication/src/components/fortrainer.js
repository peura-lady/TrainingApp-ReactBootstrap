import React, { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

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
        // {field: 'id'},
        { headerName: "Name", field: 'firstname' },
        { headerName: "Surname", field: 'lastname' },
        { headerName: "Street adress", field: 'streetadress' },
        { headerName: "Post Code", field: 'postcode' },
        { headerName: "City", field: 'city' },
        { headerName: "Email", field: 'email', },
        { headerName: "Phone", field: 'phone'},
    ]

      return (

        
      
            <div className="ag-theme-material"  style={{ width: 1700, height: 700}}>

                
                <AgGridReact
                    
                    rowData={customers}
                    columnDefs={columns}
                      
                />
{/* 
          <AgGridColumn field="firstname" width={100} />
          <AgGridColumn field="lastname" width={100} />
          <AgGridColumn field="streetadress" width={100} /> */}

            </div>
    )
}

export default ForTrainers;