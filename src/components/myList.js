import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {sortStocksByChange} from './myList';
// import {sortStocksByName} from './myList';
import "../App-large.css";
import "../App-mid.css";
import "../App.css";
import chart from '../assets/chart.jpg';
function MyList({sortedList, setSortedList}) {

    var liveStockList =[]
 
    let [sortBtn, setSortBtn] = useState(false);

    // useEffect(() => {
    //     setSortedList(listStock)
    // },[])
    

    //Placeholder for data base



        // const displaySortedStocks = () => {
            
        // }


          //Changes price colors bases on increase of decrease
        const ChangeColors = (ChangeInPrice) =>  {
        return(ChangeInPrice > 0) ? "rgb(54 251 0)" : "rgb(169 8 63)"
        }

        const sortStocksByName = (listOfObjects1) => {
            let newArr1 = [...sortedList]
            return newArr1.sort((a,b) => a.companyName - b.companyName)
        }

        
        const sortStocksByChange = () => {
            let newArr = [...sortedList]
            if(sortBtn === false){

            newArr.sort((a,b) => a.changePercent - b.changePercent)
            setSortedList(newArr)
            setSortBtn(true)
            }else if(sortBtn === true){
            newArr.sort((a,b) => b.changePercent - a.changePercent)
            setSortedList(newArr)
            setSortBtn(false) 
            }
        }



        const deleteRow = (keyOfRow) => {
            let newArr = [...sortedList]
            newArr.splice(keyOfRow,1)
            setSortedList(newArr)
            console.log('Delete', keyOfRow, sortedList )
        }


    const displaySocks = () => {
        return sortedList.map((eachElement, keyOfRow) => {
            let textColors = ChangeColors(eachElement.change)
            return (
                
                <div class="list-row-myList" key={keyOfRow}>
        
               
                    <div class="moveLineBtn">
                        {/* <button>
                            move
                        </button> */}
                    </div> 

                    <div class="Stock-cell">
                            <Link to={`StockDetails/${eachElement.symbol}`}w style={{color:'black'}}><p>{eachElement.symbol.toUpperCase()}</p></Link>
                            <p>{eachElement.companyName}</p>
                    </div>

                    <div class="chart-Mylist">
                        {/* <img src={require('../assets/chart.jpg')} alt="Small Chart" /> */}
                    </div>  

                    <div class="Stock-cell">
                            <p style={{color:`${textColors}`}}>
                                {eachElement.iexAskPrice}</p>
                            <p style={{color:`${textColors}`}}>
                                ${eachElement.change.toFixed(2)} ({((eachElement.changePercent.toFixed(2))*100).toFixed(2)})%
                            </p>
                    </div>
                    <div class="del-btn-myList">
                        <button onClick={() => deleteRow(keyOfRow)} class="delete-Btn">
                            delete
                        </button>
                    </div>
                </div>
            )
        })
    }


    // Return -------------------------------------------------------------
    return (
        <div>
            <h3 style={{marginLeft:'40px'}}> My List </h3>

            <div class='top-bts-MyList'>
                <div>
                    <Link to="/SearchForm"><button>add stock</button></Link>
                </div>
                
                <div>
                    <button onClick={sortStocksByChange}>sort</button>
                </div>
            </div>

            {displaySocks()}

        </div>
    );
}

export default MyList;