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
          `http://newsapi.org/v2/everything?q=${symbol}&from=2021-02-22&sortBy=popularity&apiKey=${token}`
        )
        .then((res) => {
        //   console.log(res.data.articles);
           setNewsZ(res.data.articles);
        //    console.log(newsZ);
        
        });
    }, [])


    const displayNews = () =>{
        let newArr = [...newsZ].slice(2,5)
        console.log(newArr);
       return newArr.map(element => {
           return(
            <div class='newsCell'>
                <div>
                    <img style={{width:'303px', height:'120px'}} src={element.urlToImage}/>
                
                
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
    
    
        const displaySocks = () => {
            
            return sortedList.map((eachElement, keyOfRow) => {
                return (
    
                    <div class="list-row-myList" key={keyOfRow}>
            
                   
                        <div class="moveLineBtn">
                            <button>
                                move
                            </button>
                        </div> 
    
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

        {/* <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <button>
                            move
                        </button>
                    </div> 

                    <div class="Stock-cell">
                            <p>BAC</p>
                            <p>Stock name</p>
                    </div>

                    <div class="Stock-cell">
                            <p>$25.33</p>
                            <p>+$3.20 (12.83%)</p>
                    </div>
                    <div>
                            <p>size</p>
                    </div>
                    <div>
                            <p>increase per share</p>
                    </div>
                    <div>
                            <p>increase %  per share</p>
                    </div>

                    <div>
                            <p>Profit</p>
                    </div>

                    <div>
                            <p>Total equity</p>
                    </div>


                    <div class="del-btn-myList">
                            del
                    </div>
        </div> */}

        {/* /My watch list/ */}

        {/* <div> */}
        {/* class="component-container-myList" */}
            {/* <h3 style={{marginLeft:'40px'}}> My List </h3> */}
            

            
            {/* First Row */}
        {/* <div class='top-bts-MyList'>
            <div>
                <Link to="/SearchForm"><button>add stock</button></Link>
            </div>
            <div>
                <button>sort</button>
            </div>
        </div>

        <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <img src={require('../assets/6dots.png')} alt="Button to move line" />
                    </div> 

                    <div class="Stock-cell">
                            <p>BAC</p>
                            <p>Stock name</p>
                    </div>

                    <div class="chart-Mylist">
                        <img src={require('../assets/chart.jpg')} alt="Small Chart" />
                    </div>  

                    <div class="Stock-cell">
                            <p>$25.33</p>
                            <p>+$3.20 (12.83%)</p>
                    </div>
                    <div class="del-btn-myList">
                            del
                    </div>
        </div>

    </div> */}


    <div class='news'>
        {displayNews()}
    </div>


        </div>
    );
}

export default MainPage;