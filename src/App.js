
import './App.scss';

import Header from './components/Header';
import Container from 'react-bootstrap/Container';

import Home from './components/Home';
import LinuxD from './components/LinuxD';



function App() {
  return (
    <div className="App">

      <Header />

      <div className='app-con'>


        <Home/>

        <LinuxD/>
        


      </div>
        

      



      
      
    </div>
  );
}

export default App;
