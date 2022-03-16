import logo from './logo.svg';
import './App.css';
import SideBAr from './sidebar';
import TopBar from './topbar';
import DashBoard from './dashboard';
import UserList from './userlist';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateUser from './createuser';
import UserView from './UserView';
import UserEdit from './UserEdit';

function App() {
  return (
    <BrowserRouter>
      <body id="page-top">
        <div id="wrapper">
          <SideBAr></SideBAr>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar></TopBar>
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/userlist" element={<UserList />} />
                  <Route path="/createuser" element={<CreateUser/>} />
                  <Route path="/UserView/:id" element={<UserView/>} />
                  <Route path="/UserEdit/:id" element={<UserEdit/>} />
                </Routes>

              </div>


            </div>
          </div>




        </div>
      </body></BrowserRouter>


  );
}

export default App;
