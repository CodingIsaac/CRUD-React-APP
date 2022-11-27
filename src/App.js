import Movies from './components/movie';
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <main className='container'>
    <Route path='/movies' components={Movies}></Route>
    <Route path='/customers' components={Customers}></Route>
    <Route path='/rentals' components={Rentals}></Route>
    <Route path='/not-found' components={NotFOund}></Route>


      </main>
  );
}

export default App;
