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





































  













  let [stock, setStock] = useState({});
  let [stockChart, setSTockChart] = useState([]);
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
        console.log(res);
        setSTockChart(res.data);
      });
  };


  useEffect(() => {
    getStockChart("tsla");
  }, []);



















  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },

    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];




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
        console.log(dataZ);
        setStock(dataZ.data);
      });
  };

  // UseEffect helps rendering the page without refreshing the page
 
  // Function that iterates throug the Quote Array and prints every key
  const displayData = () => {
    return Object.keys(stock).map((eachItem) => {
      // console.log(eachItem)
      return (
        <div>
          <li>
            {eachItem} : {stock[eachItem]}
          </li>
        </div>
      );
    });
  };

  //Returns the proper Html Page












































  return (
    <div class="component-container">
      <div>
        {appl.symbol} {appl.companyName}
      </div>
      <div class="color-change">
        {appl.change} ({appl.changePercent})
      </div>{" "}
      {/* chanage to procentage and 2 decimal places*/}
      {/* Stock Chart */}
      <div >Chart??
      
     
  <LineChart
    width={500}
    height={300}
    data={stockChart}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="high" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="close" stroke="#82ca9d" />
  </LineChart>
</div>
      {/* Stock Summary */}
      <h3>Summary</h3>
      <div class="summary-Section">
        {/* Stock Summary   First Column*/}
        <div class="summary-column">
          <div> previousClose : {appl.previousClose} </div>
          <div> Open Price : {appl.iexOpen} </div>
          <div> Average volume : {appl.avgTotalVolume} </div>
          <div> Previous Volume : {appl.previousVolume} </div>
        </div>

        {/* Stock Summary   Second Column*/}
        <div class="summary-column">
          <div>Year to date : {appl.ytdChange} </div>
          <div>52 Weeks Range : {appl.week52High - appl.week52Low}</div>
          <div>Market Cap : {appl.marketCap}</div>
          <div>P/E : {appl.peRatio}</div>
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
