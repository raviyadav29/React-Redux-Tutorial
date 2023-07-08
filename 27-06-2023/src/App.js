import logo from './logo.svg';
import './App.css';
import Comp01 from './Components/Comp01';
import Comp02 from './Components/Comp02';

function App() {
  return (
    <div className="App">
      <h2 style={{marginBottom:"30px",textAlign:"center"}}>Welcome To Redux</h2>
      <Comp01 />
      <Comp02/>
    </div>
  );
}

export default App;
