import React, {useState}from 'react';

function SearchForm(props) {

    let [stockSearched, setstockSearched ] = useState('')
    var listStocks = []

    const inputStock = (e) =>{
        console.log(e.target.value)
        setstockSearched(e.target.value)
    }


    const addStockToList =(e)=>{
        return listStocks.push(stockSearched)
    }



    /*Will need to find a way to seach for a stock ticker from the online data base */
    return (
        <div>
                <form class="Search Stock">
                    <input type="text" onChange={inputStock}/>
                    <button onClick={addStockToList} type="submit">Find-Stock/Add Stock</button>
                </form>
                <div>
                    {listStocks[0]}
                </div>
        </div>
    );
}

export default SearchForm;