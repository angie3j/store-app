import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Button from "react-bootstrap/Button";

// Pages
import Edit from './Pages/Edit';
import Home from './Pages/Home';
// import Index from './Pages/Index';
import Form from './Pages/New';
import Show from './Pages/Show';
// import Reload from './Pages/Reload';

// Components
 import NavBar from './Components/NavBar';
import Products from './Components/Products';


function App() {
  return (
    <div>
        <Router> 
        <NavBar />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL */}
        <Routes>
            <Route exact path='/' element={ <Home />}/>
            <Route path='/products' element={ <Products /> } />
            <Route path='/products/new' element={ <Form />} />
            <Route path='/products/:id' element={ <Show /> } />
            <Route path='/products/:id/edit' element={ <Edit /> } />
            </Routes>
            </Router>
    </div>
  )
}

export default App;
