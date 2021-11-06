import React from "react";
import Button from "@restart/ui/esm/Button";

function AddCustomer() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (

        <div>
            <div>
            <Button className="addCustomerBtn" style={{marginLeft: '1370px', color: "#f0edef", fontWeight:'600', fontSize: '18px', marginTop: '10px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px'}} variant="outlined" onClick={handleClickOpen}>
                Add new customer
            </Button>
            </div>
        </div>
    )
}

export default AddCustomer;