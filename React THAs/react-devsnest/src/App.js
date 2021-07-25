import { Route, Switch } from 'react-router-dom';
import './App.css';
import Card from './components/Day16/Card';
import Chessboard from './components/Day16/Chessboard';
import HealthCardList from './components/Day17/HealthCardList';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Welcome />
        </Route>
        <Route path='/Day16-Cards'>
          <Header />
          <Card />
        </Route>
        <Route path='/Day16-Chessboard'>
          <Header />
          <Chessboard />
        </Route>
        <Route path='/Day17'>
          <Header />
          <HealthCardList />
        </Route>
        <Route path='/Day18'>
          <Header />
          <div>Day 18 THA goes here</div>
        </Route>
        <Route path='/Day19'>
          <Header />
          <div>Day 19 THA goes here</div>
        </Route>
        <Route path='/Day20'>
          <Header />
          <div>Day 20 THA goes here</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
