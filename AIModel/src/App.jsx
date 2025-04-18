// import Firstpage from './components/Firstpage';
// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import RegistrationForm from './components/RegistrationForm';
// import About from './components/About';
// import Contactus from './components/Contactus';


// function App() {
//   return (<>
  
    
//     <Router>
//       <Contactus/>
//         <Firstpage/>
//     <About/>
//   <Login/>
//   <Register/>
//   <RegistrationForm/>
      
//       <Navbar />
//      <Routes>
//         <Route path="/" element={ <div>Home Page</div>}> 
//         </Route>
//         <Route path="/about" element={<div>About Page</div>}>
//         </Route>
//         <Route path="/contact" element={<div>Contact Us Page</div>}>
//         </Route>
//      </Routes>
//     </Router></>
//   );
// }



// export default App



import './App.css'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Firstpage from './components/Firstpage'
import Login from './components/Login'
import ContactUs from './components/Contactus'
import RegistrationForm from './components/RegistrationForm'
import About from './components/About'
import Otp from './components/Otp'
import OtpInput from './components/Otp'
import DataInput from './components/DataInput'

const App = () => {
  return (
    <div>
      <div>
        <Router>
            <Routes>
               <Route path="/" element={<Firstpage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<RegistrationForm/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<ContactUs/>}></Route> 
                <Route path="/otp" element={<Otp/>}></Route>
                <Route path="/datainput" element={<DataInput/>}></Route>
            </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
/*
<Route path="/" element={<Firstpage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<RegistrationForm/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<ContactUs/>}></Route> */