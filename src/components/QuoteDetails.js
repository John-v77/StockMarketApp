import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {appl} from './data';

function QouteDetails(props) {

    let [stock, setStock] = useState(appl)

    
    const token = 'pk_695271cfa88a4f01969c642eb1576b3f'
    axios.get(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${token}`)
        .then( dataZ => {
            console.log(dataZ)
            setStock(dataZ)
        })

// useEffect(() => {
//     axios.get(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${token}`)
//         .then( dataZ => {
//             console.log(dataZ)
//         })

//         }, [])


        const displayData = () => {
           return Object.keys(stock).map(eachItem => {
                console.log(eachItem)
                return(
                    <div>
                       <li>
                            {eachItem} : {stock[eachItem]}
                       </li>
                    </div>
                )
            })

        }


    return (
        <div class="component-container">
        {stock.companyName}
                {displayData()}
        </div>
    );
}

export default QouteDetails;