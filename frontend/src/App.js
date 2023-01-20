import logo from './logo.svg';
import './App.css';
import HomePage from './MainPage/HomePage';
import Setinterval from './Componants/Setinterval';
import Register from './Componants/Register';
import Login from './Componants/Login';
import Otp from './Componants/Otp';


function App() {
  return (
    <div className="App"> 
    {/* <HomePage/> */}
    <Register/>
    <Login/>
    </div>
  );
}

export default App;
