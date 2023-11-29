import { Fragment } from 'react';
import './App.css';
import Navs from './component/Navs/Navs';
import Home from './component/home.js/home';
import UncontrolledExample from "./component/slider/slider"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
           <Navs/>
           <Home/>

           
    </Fragment>
  );
}

export default App;
