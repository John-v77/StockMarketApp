import React, { useState } from 'react';

function Test(props) {

    let listStock =[
        { symbol:'appl',
                companyName: 'Apple', 
                iexAskPrice:129.87,
                change:-12,
                changePercent:0.0987},   
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
        {  symbol:'nio', 
                companyName: 'Nio INC', 
                iexAskPrice:55.04,
                change:0.61,
                changePercent:0.0112},
        { symbol:'pton', 
                companyName: 'Peloton Inc', 
                iexAskPrice:139.71,
                change:+1.26,
                changePercent:0.0091},
        ]

    set[list1, setList1] = useState([])
        
    const sort1 =(list1)=>{
        let newArr = [...list1]
        newArr.sort((a,b)=>{ a.changePercent - b.changePercent})
        setList1(newArr)
    }

    const display1 = (list2) => {
        return list2.map((eachEl) =>{
            <div>{eachEl.iexAskPrice}</div>
        })
    }


    return (
        <div>
            
            <button onClick={sort1}>sort</button>



            
        </div>
    );
}

export default Test;