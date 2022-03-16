
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Routing/Nav';
import Routing from './Components/Routing/Routing';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
