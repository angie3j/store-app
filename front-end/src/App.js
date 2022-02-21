import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Edit from './Pages/Edit';
import Home from './Pages/Home';
// import Index from './Pages/Index';
import Form from './Pages/New';
import Show from './Pages/Show';
// import Reload from './Pages/Reload';

// Components
 import NavBar from './Components/NavBar';
import Product from './Components/Product';


function App() {
  return (
    <div>
        <NavBar />
        <Router>
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/products' element={ <Product /> } />
            <Route path='/products/new' element={ <Form />} />
            <Route exact path='/products/:id' element={ <Show /> } />
            <Route path='/products/:id/edit' element={ <Edit /> } />
          </Routes>
        </Router>
    </div>
  )
}


// import axios from "axios";
// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/test`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
