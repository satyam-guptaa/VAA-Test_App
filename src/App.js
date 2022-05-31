import './App.css';
import MainPage from './components/MainPage/MainPage';

function App(){
  return (
    <>
      <nav className="myNavbar" >
        <div className="nav-container">
            <h2 data-testid="header">Virgin Atlantic Holidays</h2>
        </div>
      </nav>
      <MainPage data-testid="mainPage"/>
    </>
  );
}

export default App;
