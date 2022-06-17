import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import UserTicket from './UserTicket';



function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Register/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/user" element={<UserTicket/>}/>
      
       
     </Routes>
     </BrowserRouter>
  );
}

export default App;
