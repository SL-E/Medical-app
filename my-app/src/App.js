import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import home from "./pages/home/home";
import logo from "./images/logo.webp";
import user from "./pages/user/user";
import drug from "./pages/drug/drug";
import Hospitals from "./pages/Hospitals/Hospitals";

import Pharmacies from "./pages/Pharmacies/Pharmacies";

import Doctors from "./pages/Doctors/Doctors";
import login from "./pages/login/login";
import About from "./pages/About/About";
import book from "./pages/book/book";
import Medicines from "./pages/Medicines/Medicines";
import {observer} from 'mobx-react-lite'
import {userdata} from './store/user'
import guanli from './pages/login/guanlui/guanli'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="box">
          <div className="app_heasdedr">
            <div className="hear">
        
              <Link className="logo" to="/About">
              <img src={logo}></img>
                </Link>

              <div className="title">
                <span>
                  Medical Service <br></br>
                  in NewZealand
                </span>
              </div>
              <div className="daohang">
                <Link className="dsds" to="/About">
                  About Us
                </Link>
                
                <Link className="dsds" to="/home">
                  help
                </Link>

                <Link className="dsds">FAQs</Link>
                <Link className="dsds">Feedback</Link>
                <Link className="dsds">Get the APP</Link>
                <Link className="dsds" to="/login">
                  log in
                </Link>
              </div>
              <div >
               
              </div>
{userdata.token? <Link className="sdasa" to="/user">
              profile<br></br>
                photo

                {userdata.token}
              </Link>:'' }
             
            </div>
          </div>

          <div className="navs">
            <div className="nacBox">
              <Link className="dsdsaa" to="/book">
                Book
              </Link>

              <Link className="dsdsaa" to="/Hospitals">
                Hospitals&Clinics
              </Link>

              <Link className="dsdsaa" to="/Pharmacies">
                Pharmacies
              </Link>

              <Link className="dsdsaa" to="/Doctors">
                Doctors
              </Link>

              <Link className="dsdsaa" to="/Drug">
                Medicines
              </Link>
            </div>
          </div>

          <Routes>
          
          <Route path="/guanli" Component={guanli}></Route>
            <Route path="/login" Component={login}></Route>
            <Route path="/About" Component={About}></Route>
            <Route path="/book" Component={book}></Route>
            <Route path="/" Component={About}></Route>
            <Route path="/Medicines" Component={Medicines}></Route>
            <Route path="/home" Component={home}></Route>
            <Route path="/user" Component={user}></Route>
            <Route path="/drug" Component={drug}></Route>
            <Route path="/Doctors" Component={Doctors}></Route>
            <Route path="/Hospitals" Component={Hospitals}></Route>
            <Route path="/Pharmacies" Component={Pharmacies}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default observer(App) ;
