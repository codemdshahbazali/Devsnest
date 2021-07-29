import { Route, Switch } from 'react-router-dom';
import './App.css';
import Card from './components/Day16/Card';
import Chessboard from './components/Day16/Chessboard';
import HealthCardList from './components/Day17/HealthCardList';
import ChessboardEnhanced from './components/Day18/ChessboardEnhanced';
import HealthCardListEnhanced from './components/Day18/HealthCardListEnhanced';
import CounterList from './components/Day19/CounterList';
import HealthCardListWIthDelete from './components/Day20/HealthCardListWIthDelete';
import HealthTodoList from './components/Day21/HealthTodoList';
import MemeList from './components/Day22/MemeList';
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
        <Route path='/Day18-Chessboard'>
          <Header />
          <ChessboardEnhanced />
        </Route>
        <Route path='/Day18-HealthCard'>
          <Header />
          <HealthCardListEnhanced />
        </Route>
        <Route path='/Day19'>
          <Header />
          <CounterList />
        </Route>
        <Route path='/Day20'>
          <Header />
          <HealthCardListWIthDelete />
        </Route>
        <Route path='/Day21'>
          <Header />
          <HealthTodoList />
        </Route>
        <Route path='/Day22'>
          <Header />
          <MemeList />
        </Route>
        <Route path='/Day23'>
          <Header />
          <div>Day 23 THA goes here</div>
        </Route>
        <Route path='/Day24'>
          <Header />
          <div>Day 24 THA goes here</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
