import './App.css';
import './Css-component/typography.css';
import NavBar from './components/navBar';
import MainPage from './components/mainPage';
import QuoteDetails from './components/QuoteDetails';
import MyList from './components/myList';
import SearchForm from './components/searchForm';
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" render={(props) => <MainPage {...props}/>}/>
          {/* <Route exact path="/MainPage" render={(props) => <MainPage {...props}/>}/> */}
          <Route exact path="/QuoteDetails" render={(props) => <QuoteDetails {...props}/>}/>
          <Route exact path="/MyList" render={(props) => <MyList {...props}/>}/>
          <Route exact path="/SearchForm" render={(props) => <SearchForm {...props}/>}/>
          <Route exact path="/StockDetails/:symbol" render={(props) => <QuoteDetails {...props}/>}/>
          <Route path="" render={() => <p>Not Found</p>}/>
        </Switch>
    </div>
  );
}

export default App;
