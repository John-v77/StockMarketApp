import React, {useState}from 'react';
import {Link} from 'react-router-dom';

function SearchForm({sortedList, setSortedList}) {
//     </div>
//         {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
// </div>

    let [stockSearched, setstockSearched ] = useState('')
    var listStocks = []

    const inputStock = (e) =>{
        console.log(e.target.value)
        setstockSearched(e.target.value)
    }


    const addStockToList =(e)=>{
        // listStocks.push(stockSearched);
        // <Link class='text-light navBtn' to="MyList">My List</Link>
        let list = [...sortedList]
        list.push(
            { symbol:stockSearched, companyName:stockSearched,  iexAskPrice:129.87,
        change:-12,
        changePercent:-0.0987}
            )
            setSortedList(list)
    }



    /*Will need to find a way to seach for a stock ticker from the online data base */
    return (
        <div>
                <form class="Search Stock">
                    <input type="text" onChange={inputStock}/>
                    <Link class='text-light navBtn' to="MyList">
                        <button onClick={addStockToList} type="submit">Find-Stock/Add Stock</button>
                    </Link>
                </form>
                <div>
                    {listStocks[0]}
                </div>
        </div>
    );
}

export default SearchForm;