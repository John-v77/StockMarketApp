import React from 'react';
import {Link} from 'react-router-dom';

function MyList(props) {


    const showRows = () => {




       
           for (let i=0; i>5; i++){
                
            }
                    
    }


    return (
        <div>
        {/* class="component-container-myList" */}
            <h3 style={{marginLeft:'40px'}}> My List </h3>
            

            
            {/* First Row */}
        <div class='top-bts-MyList'>
            <div>
                <Link to="/SearchForm"><button>add stock</button></Link>
            </div>
            
            <div>
                <button>
                    sort
                </button>
            </div>
        </div>

        <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <button>
                            move
                        </button>
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



        <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <button>
                            move
                        </button>
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


        <div class="list-row-myList">
        
               
                     <div class="moveLineBtn">
                        <button>
                            move
                        </button>
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


        <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <button>
                            move
                        </button>
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



        <div class="list-row-myList">
        
               
                    <div class="moveLineBtn">
                        <button>
                            move
                        </button>
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







            {/* <div class="Table-head-myList">
                <div>add item</div>
                <div>sort button</div>
            </div>         
            <div class='list-row-myList' class="flex-line">
                <div>
                    button on click lets you drag the list item in place you want
                </div>
                <div>
                    <p>Symbol</p>
                    <p>Stock name</p>
                </div>
                <div>
                    <p>Chart</p>
                </div>
                <div>
                    <p>Price</p><span><p>% change</p></span>
                </div>
                <div> button delete item</div>
                <div></div>

            </div> */}
        </div>
    );
}

export default MyList;