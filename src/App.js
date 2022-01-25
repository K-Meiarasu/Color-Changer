import './App.css';
import Color from './Color/Color';
//import Dropdown from './Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p>Color Convertor App</p>
      </div><br/>
      <Color></Color>
      {/* <Dropdown></Dropdown> */}
    </div>
  );
}

export default App;
