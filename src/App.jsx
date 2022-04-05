import Principalpage from './Components/Principalpage'
// import Principalbuttons from './Components/Principalbuttons'
import Playing from './Components/Playing'
import Gameover from './Components/Gameover';
import Modal from './Components/Modal';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import music from './Components/Assets/music.mp3';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <audio id="audio" src={music} autoPlay loop={true} controls></audio>
        <Routes>
          <Route path = '/' exact element ={<Principalpage/>}></Route>
          {/* <Route path = '/' exact element = {<Principalbuttons/>}></Route> */}
          <Route path = '/playing' element = {<Playing/>} />
          <Route path = '/gameover' element = {<Gameover/>} />
          <Route path = '/instructions' element = {<Modal/>} />

          {/* Redirect */}
          <Route path='*' element={<Navigate to ="/" />}/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
