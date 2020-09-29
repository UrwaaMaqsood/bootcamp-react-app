import React from 'react';

function Mobile (props){
    return(
        <div>
            <h1>{props.MobileCompany} Mobile</h1>
            <h1>{props.LaptopCompany} Laptop</h1>
        </div>  
    )
}

export default Mobile;