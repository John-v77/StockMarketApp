import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import chart from '../assets/chart.jpg';

function MainPage(props) {

        let[newsZ, setNewsZ] = useState([])
        //news API
        let symbol ='Bank of America'
        let token ='1d6df61d07df4f56ac57fa785fce0fc9'


useEffect(() => {
        axios
        .get(
          `https://newsapi.org/v2/everything?q=${symbol}&from=2021-02-22&sortBy=popularity&apiKey=${token}`
        )
        .then((res) => {
        //   console.log(res.data.articles);
           setNewsZ(res.data.articles);
        //    console.log(newsZ);
        
        });
    }, [])


    const displayNews = () =>{
        let newArr = [...newsZ].slice(0,3)
        console.log(newArr);
       return newArr.map(element => {
           return(
            <div class='newsCell'>
                <div>
                <div style={{width:'20vw', height:'120px', backgroundImage:`url(${element.urlToImage})`, backgroundSize:"cover", borderRadius: "6px 6px 0 0"}}>
                    {/* <img style={{width:'303px', height:'120px'}} src={element.urlToImage}/> */}
                </div>
                
                    <b><p>{element.title}</p></b>
                
                
                    <p>{element.content}</p>
                
                
                    <p>{element.author}</p>
                </div>
            </div>
            
            )})
    }

        let listStock =[
            { symbol:'appl',
                    companyName: 'Apple', 
                    iexAskPrice:129.87,
                    change:-12,
                    changePercent:-0.0987},   
            { symbol:'tsla',
                    companyName: 'Tesla',  
                    iexAskPrice:781.30,
                    change:-6.08,
                    changePercent:-0.0077},
            {  symbol:'bac',
                    companyName: 'Bank of America',  
                    iexAskPrice:34.54,
                    change:0.35,
                    changePercent:0.0102},
            ]
    
        let [sortedList, setSortedList] = useState(listStock);
        let [sortBtn, setSortBtn] = useState(false);
    
        // useEffect(() => {
        //     setSortedList(listStock)
        // },[])
        
    
        //Placeholder for data base
    
    
    
    
            // const displaySortedStocks = () => {
                
            // }
    
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
            
            const ChangeColors = (ChangeInPrice) =>  {
                return(ChangeInPrice > 0) ? "rgb(54 251 0)" : "rgb(169 8 63)"
                }
    
        const displaySocks = () => {

            
            return sortedList.map((eachElement, keyOfRow) => {
                let textColors = ChangeColors(eachElement.change)
                return (
    
                    <div class="list-row-myList" key={keyOfRow}>
            
                   
                        {/* <div class="moveLineBtn">
                            <button>
                                move
                            </button>
                        </div>  */}
    
                        <div class="Stock-cell">
                                <p>{eachElement.symbol.toUpperCase()}</p>
                                <p>{eachElement.companyName}</p>
                        </div>
    
                        <div class="chart-Mylist">
                            <img src={chart} alt="Small Chart" />
                        </div>  
    
                        <div class="Stock-cell">
                                <p style={{color:`${textColors}`}}>
                                {eachElement.iexAskPrice}</p>
                                <p style={{color:`${textColors}`}}>
                                ${eachElement.change.toFixed(2)} ({((eachElement.changePercent.toFixed(2))*100).toFixed(2)})%</p>
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
    // useEffect(() => {}, [])

 

    return (
        <div>
            
        {/* class="component-container-myList" */}
            <h3 style={{marginLeft:'40px'}}> Positions </h3>
            
            
            
            {/* First Row */}
        <div class='top-bts-MyList'>
                 <div>
                    <button onClick={sortStocksByChange}>sort</button>
                </div>
            <div>
                <Link to="/SearchForm"><button>add stock</button></Link>
            </div>
        </div>

        {displaySocks()}

    <div class='news'>
        {displayNews()}
    </div>


        </div>
    );
}

export default MainPage;
