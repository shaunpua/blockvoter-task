
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';







function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/> 
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
           <Route path="/profile" element={<ProfilePage/>}/>
          <Route exact path="*" element={<p>Error no page found</p>}/>  
          </Routes>
      </Router>

     

      
     
    </div>
  );
}

export default App;
