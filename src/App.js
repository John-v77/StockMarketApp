import './App.css';
import './Css-component/typography.css';
import NavBar from './components/navBar';
import MainPage from './components/mainPage';
import QuoteDetails from './components/QuoteDetails';
import StockDetails from './components/StockDetails';
import MyList from './components/myList';
import SearchForm from './components/searchForm';
import { Route, Switch} from 'react-router-dom';
import {useState} from 'react'


function App() {

//list
let listStock =[
        
  { symbol:'spy',
          companyName: 'SNP 500', 
          iexAskPrice:380.36,
          change:-1.97,
          changePercent:-0.0052},   
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

let [sortedList, setSortedList] = useState(listStock);

  return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" render={(props) => <MainPage {...props}/>}/>
          {/* <Route exact path="/MainPage" render={(props) => <MainPage {...props}/>}/> */}
          <Route exact path="/QuoteDetails" render={(props) => <QuoteDetails {...props}/>}/>
          <Route exact path="/MyList" render={(props) => <MyList sortedList={sortedList} setSortedList={setSortedList} {...props}/>}/>
          <Route exact path="/SearchForm" render={(props) => <SearchForm  sortedList={sortedList} setSortedList={setSortedList} {...props}/>}/>
          <Route exact path="/StockDetails/:symbol" render={(props) => <StockDetails {...props}/>}/>
          <Route path="" render={() => <p>Not Found</p>}/>
        </Switch>
    </div>
  );
}

export default App;
