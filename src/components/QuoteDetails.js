import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {appl} from './data';
import '../App-large.css';
import '../App-mid.css';
import '../App.css';
import recharts from "recharts";
function QouteDetails(props) {


    //Set State
    let [stock, setStock] = useState({})


// Alpha Vantage API ****


// Alpha Vantage! Your API key is: H06VNLI5J5P446S5
//base url: https://www.alphavantage.co/query?
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo

    // const apiVantage = (symbolString) => {
    //     let baseurl = "https://www.alphavantage.co/query?"
    //     let apiKey = 'H06VNLI5J5P446S5'

    // }


//Function for getting a chart
const getStockChart = (symbol, {/*timeFrame*/}) => {

    //api token
    const token = 'pk_695271cfa88a4f01969c642eb1576b3f'
    const interval = 'intraday-prices'
    //axios request
    //stock/{symbol}/intraday-prices
    
    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/${interval}?token=${token}`)
        .then( dataZ => {
            console.log(dataZ)
            setStock([dataZ.data])
        })

}




//Function for drawing a chart
const drawChart =(data) => {

    <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis dataKey="Price"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="low" stroke="#8884d8" />
        <Line type="monotone" dataKey="high" stroke="#82ca9d" />
    </LineChart>
}

//   drawChart(drawChart)






//Function for getting a quote
const getStockQuote = (symbol) => {

    //api token
    const token = 'pk_695271cfa88a4f01969c642eb1576b3f'
    //axios request
    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${token}`)
        .then( dataZ => {
            console.log(dataZ)
            setStock(dataZ.data)
        })
}




// UseEffect helps rendering the page without refreshing the page
useEffect(() => {    getStockChart("tsla")        }, [])





        // Function that iterates throug the Quote Array and prints every key
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

        //Returns the proper Html Page
        
    return (
        <div class="component-container">
            <div>{appl.symbol} {appl.companyName}</div>
            <div class='color-change'>{appl.change} ({appl.changePercent})</div>   {/* chanage to procentage and 2 decimal places*/}

            {/* Stock Chart */}

            <div>Chart  {drawChart(drawChart)}</div>

            {/* Stock Summary */}
            <h3>Summary</h3>

            <div class='summary-Section'>

                {/* Stock Summary   First Column*/}
                <div class="summary-column">
                    <div>    previousClose : {appl.previousClose}    </div>
                    <div>    Open Price : {appl.iexOpen}             </div>
                    <div>    Average volume : {appl.avgTotalVolume}  </div>
                    <div>    Previous Volume : {appl.previousVolume} </div>
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