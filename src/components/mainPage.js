import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function MainPage(props) {

    // useEffect(() => {}, [])

 

    return (
        <div>
            
            





            
        {/* class="component-container-myList" */}
            <h3 style={{marginLeft:'40px'}}> Positions </h3>
            

            
            {/* First Row */}
        <div class='top-bts-MyList'>
                 <div>
                    <button>sort</button>
                </div>
            {/* <div>
                <Link to="/SearchForm"><button>add stock</button></Link>
            </div> */}
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
        </div>

        {/* /My watch list/ */}

        <div>
        {/* class="component-container-myList" */}
            <h3 style={{marginLeft:'40px'}}> My List </h3>
            

            
            {/* First Row */}
        <div class='top-bts-MyList'>
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

    </div>


    <div class='news'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
    </div>










        </div>
    );
}

export default MainPage;