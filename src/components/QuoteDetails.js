import React, { useState, useEffect } from "react";
import axios from "axios";
import { appl } from "./data";
import "../App-large.css";
import "../App-mid.css";
import "../App.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
function QouteDetails(props) {
  //Set State
  

  // Alpha Vantage API ****

  // Alpha Vantage! Your API key is: H06VNLI5J5P446S5
  //base url: https://www.alphavantage.co/query?
  //https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo

  // const apiVantage = (symbolString) => {
  //     let baseurl = "https://www.alphavantage.co/query?"
  //     let apiKey = 'H06VNLI5J5P446S5'

  // }



  let [stock, setStock] = useState(appl);
  let [stockChart, setSTockChart] = useState([]);
  let [queryStock, setQueryStock] = useState('');



  const handleChange = (e) => {
    
    console.log(e.target.value)
    setQueryStock(e.target.value)
  }





  //Function for getting a chart
  const getStockChart = (symbol) => {
    //api token
    const token = "pk_695271cfa88a4f01969c642eb1576b3f";
    const interval = "intraday-prices";
    const setPeriod = '';

    //axios request
    //stock/{symbol}/intraday-prices

    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/${interval}?token=${token}`
      )
      .then((res) => {
        // console.log(res);
        setSTockChart(res.data);
      });
  };


  useEffect(() => {
    getStockChart("appl");
    getStockQuote("appl")

  }, []);


  
  //Function for drawing a chart
  //   drawChart(drawChart)

  //Function for getting a quote
  const getStockQuote = (symbol) => {
    //api token
    const token = "pk_695271cfa88a4f01969c642eb1576b3f";
    //axios request
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${token}`
      )
      .then((dataZ) => {
        // console.log(dataZ);
        setStock(dataZ.data);
      });
  };

  const getData =(e)=>{

    getStockChart(queryStock); 
    getStockQuote(queryStock) 

  }


  // UseEffect helps rendering the page without refreshing the page
 
  // Function that iterates throug the Quote Array and prints every key
  const displayData = () => {
    return Object.keys(stock).map((eachItem) => {
      // console.log(eachItem)
      return (
        <div>
          <li>
            {eachItem} : {numberFormat(stock[eachItem])}
          </li>
        </div>
      );
    });
  };

  //Returns the proper Html Page
const ChangeColors = (ChangeInPrice) =>  {
  return(ChangeInPrice > 0) ? "green" : "red"
}

const numberFormat = (element) =>{

    if(typeof element != 'number'){
        return element
    }
    // Checks if the number is in procentage %
    if(element < 1){
      return (element*100).toFixed(2)
    }else if(element >= 1000000){
      return (element / 1000000).toFixed(2) +' mil'
    }element.toFixed(2)
    // (element < 1) ? (element*100).toFixed(2) : 
    // (element > 1000000000) ? ((element / 1000000000).toFixed(2) +' bil') : element.toFixed(2)

  }

 let priceColor = 'red'
console.log(ChangeColors(stock.change))

  return (

    <div>
        <div class="component-container">
          <div class="ticker-info-details">
          <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={getData} type="submit">Find Stock</button>
          </div>
              <div>
                {stock.symbol} {stock.companyName}   {/*toFixed(2), style={{$priceColor}}*/}
              </div>
              <div style={{color:'red'}}>
                ${stock.change.toFixed(2)} ({((stock.changePercent.toFixed(2))*100).toFixed(2)})%
              </div>
          </div>
    </div>

      {/* chanage to procentage and 2 decimal places*/}



      {/* Stock Chart */}
      <div class="chart">
      
     
          <LineChart
            width={1200}
            height={500}
            data={stockChart}
            margin={{
              top: 50,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="high" stroke="#8884d8" dot={false} />
            <Line type="monotone" dataKey="low" stroke="#82ca9d" dot={false} />
          </LineChart>
      </div>


      {/* Stock Summary */}
      <h3 class="summary-title" >Summary</h3>
      <div class="summary-Section">
        {/* Stock Summary   First Column*/}
        <div class="summary-column">
          <div> previousClose : {stock.previousClose} </div>
          <div> Open Price : {stock.iexOpen} </div>
          <div> Average volume : {stock.avgTotalVolume} </div>
          <div> Previous Volume : {stock.previousVolume} </div>
        </div>

        {/* Stock Summary   Second Column*/}
        <div class="summary-column">
          <div>Year to date : {stock.ytdChange} </div>
          <div>52 Weeks Range : {stock.week52High - stock.week52Low}</div>
          <div>Market Cap : {stock.marketCap}</div>
          <div>P/E : {stock.peRatio}</div>
        </div>

        {/* Stock Summary   Third Column*/}
        <div class="summary-column">
          <div>Bid Price : {stock.iexBidPrice}</div>
          <div>Bid Size : {stock.iexBidSize} </div>
          <div>Ask Price : {stock.iexAskPrice} </div>
          <div>Ask Size : {stock.iexAskSize} </div>
        </div>
      </div>
      {/* {stock.companyName} */}
      {displayData()}
    </div>
  );
}

export default QouteDetails;
