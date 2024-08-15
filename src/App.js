import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import UserDetails from "./components/userDetails";
import Sidebar from './components/sidebar';
import ViewEvents from './components/viewEvents';

import Dashboard from './components/dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Page" element={<Dashboard/>}/>
      <Route path="/userDetail" element={<UserDetails />}/>
      <Route path="/events" element={<ViewEvents />}/>
      <Route path="/userDetail" element={<UserDetails />}/>
      <Route path="/userDetail" element={<UserDetails />}/>
      <Route path="/userDetail" element={<UserDetails />}/>

      {/* {/* <div className='flex-grow-1'>
        <Login/> */}
      
      </Routes>
      </BrowserRouter>
    
  


  );
}
export default App;
