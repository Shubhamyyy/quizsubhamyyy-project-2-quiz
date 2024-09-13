import logo from './logo.svg';
import './App.css';
import data from './data'
import { Link, Route, Routes } from 'react-router-dom';
import TestPage from './Components/TestPage';
import SubmitPage from './Components/SubmitPage';

function App() {
  return (
    <div>
      <div className="flex">
      <div className="ml-20">
        <p>StudyWithUs</p>
      </div>
      <div class="ml-60">
        <Link to="test">
        <button className='border rounded '>Try it now</button>
        </Link>
      </div>
      </div>
      <Routes>
        <Route path="test" element={<TestPage></TestPage>}></Route>
      </Routes>
      <Routes>
        <Route path="test/submit" element={<SubmitPage></SubmitPage>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
