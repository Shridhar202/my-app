import logo from './logo.svg';
import './App.css';
import Add from './components/Add/Add';
import Sub from './components/Sub/Sub';

function App() {
  return (
      <div>
        <h1> First React Project 1 </h1>
        <p> test p tag </p>

        <Add a = '2' b = '2'> </Add>
        <Sub a = '2' b = '2'/>

      </div>    
  );
}

export default App;
