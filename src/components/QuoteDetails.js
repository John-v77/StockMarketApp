import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {appl} from './data';
import '../App-large.css';
import '../App-mid.css';
import '../App.css';

function QouteDetails(props) {

    let [stock, setStock] = useState({})

    


useEffect(() => {

    const token = 'pk_695271cfa88a4f01969c642eb1576b3f'
    axios.get(`https://cloud.iexapis.com/stable/stock/tsla/quote?token=${token}`)
        .then( dataZ => {
            console.log(dataZ)
            setStock(dataZ.data)
        })
        }, [])


        const displayData = () => {
           return Object.keys(stock).map(eachItem => {
                // console.log(eachItem)
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
            <div>{appl.symbol} {appl.companyName}</div>
            <div class='color-change'>{appl.change} ({appl.changePercent})</div>   {/* chanage to procentage and 2 decimal places*/}

            {/* Stock Chart */}
            <div>Chart</div>

            {/* Stock Summary */}
            <h3>Summary</h3>

            <div class='summary-Section'>

                {/* Stock Summary   First Column*/}
                <div class="summary-column">
                    <div><p>    previousClose : {appl.previousClose}    </p></div>
                    <div><p>    Open Price : {appl.iexOpen}             </p></div>
                    <div><p>    Average volume : {appl.avgTotalVolume}  </p></div>
                    <div><p>    Previous Volume : {appl.previousVolume} </p></div>
                </div>

                 {/* Stock Summary   Second Column*/}
                <div class="summary-column">
                    <div>Year to date : {appl.ytdChange} </div>
                    <div>52 Weeks Range : {appl.week52High - appl.week52Low}</div>
                    <div>Market Cap : {appl.marketCap}</div>
                    <div>P/E        : {appl.peRatio}</div>
                </div>


                 {/* Stock Summary   Third Column*/}
                <div class="summary-column">
                    <div>Bid Price : {appl.iexBidPrice}</div>
                    <div>Bid Size : {appl.iexBidSize} </div>
                    <div>Ask Price : {appl.iexAskPrice} </div>
                    <div>Ask Size : {appl.iexAskSize} </div>
                </div>

            </div>
        {/* {stock.companyName} */}
                {displayData()}
        </div>
    );
}

export default QouteDetails;