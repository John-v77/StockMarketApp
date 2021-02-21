import React from 'react';

function AppUtils(props) {
    return (
        <div>
            
        </div>
    );
}

// Sort stocks by price
export const sortStocksByChange = (listOfObjects) => {
    let newArr = [...listOfObjects]
    return newArr.sort((a,b) => a.changePercent - b.changePercent)
}

// Sort stocks by name
export const sortStocksByName =(listOfObjects1) => {
    let newArr1 = [...listOfObjects1]
    return newArr1.sort((a,b) => a.companyName - b.companyName)
}


export default AppUtils;