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


// UseState helps rendering the page without refreshing the page
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



   // UseEffect helps rendering without causing a infinite loop
  useEffect(() => {
    getStockChart("bac");
    getStockQuote("bac")

  }, []);
//_______________________



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
        console.log(dataZ);
        setStock(dataZ.data);
      });
  };
//_______________________


  const getData =(e)=>{

    getStockChart(queryStock); 
    getStockQuote(queryStock); 

  }
  //_______________________


 
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



  //Changes price colors bases on increase of decrease
const ChangeColors = (ChangeInPrice) =>  {
  return(ChangeInPrice > 0) ? "#0B893E" : "#BF1722"
}



//formats the number based on each case
const numberFormat = (element) =>{

    if(typeof element != 'number'){
        return element
    }
    // Checks if the number is in procentage %
    if(element < 1 && element > 0){
      element*=100;
      return (element).toFixed(4)
    }else if(element >= 1000000000){
      return (element / 1000000000).toFixed(2) +'B'
    }else if(element >= 1000000){
      return (element / 1000000).toFixed(2) +'M'
    }else{
      return element.toFixed(2)
    }

  }


  return (

    <div>
        <div class="component-container">
          <div class="ticker-info-details">
          <div class="search-ticker-details">
            <input style={{width:'5vw'}}type="text" onChange={handleChange}/>
            <button style={{backgroundColor:'#4F628E', color:'white', border:"none", borderRadius:'2px'}} onClick={getData} type="submit">Find Stock</button>
          </div>
              <div>
              <b>{stock.companyName}</b> <p style={{fontSize:'14px'}}>{stock.symbol}</p>  
              </div>
              <div style={{color:ChangeColors(stock.change)}}>
                ${stock.iexAskPrice ? stock.iexAskPrice : stock.close}
              </div>
              <div style={{color:ChangeColors(stock.change)}}>
                ${stock.change.toFixed(2)} ({((stock.changePercent.toFixed(2))*100).toFixed(2)})%
              </div>
          </div>
    </div>

      {/* chanage to procentage and 2 decimal places*/}



      {/* Stock Chart */}
      <div class="chart">
      
     
          <LineChart
            
            width={900}
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
            <XAxis dataKey="minute" />
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip />
            <Legend  />
            <Line type="monotone" dataKey="high" stroke="#FC8C06" dot={false} />
            <Line type="monotone" dataKey={"low"} stroke="#69B5F0" dot={false} />
          </LineChart>
      </div>


      {/* Stock Summary */}
      <h3 class="summary-title" >Summary</h3>
      <div class="summary-Section">
        {/* Stock Summary   First Column*/}
        <div class="summary-column">
          <div> previousClose : {stock.previousClose} </div>
          <div> Open Price : {stock.iexOpen} </div>
          <div> Average volume : {(stock.avgTotalVolume/1000000).toFixed(2)}m </div>
          <div> Previous Volume : {(stock.previousVolume/1000000).toFixed(2)}m </div>
        </div>

        {/* Stock Summary   Second Column*/}
        <div class="summary-column">
          <div>Year to date : {((stock.ytdChange.toFixed(2))*100).toFixed(2)}% </div>
          <div>52 Weeks Range : ${(stock.week52High - stock.week52Low).toFixed(2)}</div>
          <div>Market Cap : {(stock.marketCap/1000000000).toFixed(2)}b</div>
          <div>P/E : {stock.peRatio}</div>
        </div>

        {/* Stock Summary   Third Column*/}
        <div class="summary-column">
          <div>Bid Price : ${stock.iexBidPrice}</div>
          <div>Bid Size : {stock.iexBidSize} </div>
          <div>Ask Price : ${stock.iexAskPrice} </div>
          <div>Ask Size : {stock.iexAskSize} </div>
        </div>
      </div>
      {/* {stock.companyName} */}
      {/* {displayData()} */}
    </div>
  );
}

export default QouteDetails;
