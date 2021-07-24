import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
  
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
