import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MainPage(props) {

    // useEffect(() => {}, [])

    axios.get(`https://cloud.iexapis.com/stable/stock/AA/qoute?token=pk_695271cfa88a4f01969c642eb1576b3f`)
    .then(dataz =>{
        console.log(dataz)
    })


    return (
        <div>
            MainPage
        </div>
    );
}

export default MainPage;