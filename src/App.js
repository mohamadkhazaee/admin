import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import './less/App.less';
import React  from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './pages/auth/Login'
import IsAuth from './components/IsAuth';
import LayoutComp from './pages/LayoutComp';
function App(props) {

  return (
    <ConfigProvider direction="ltr">
      <Router>
      <Switch>
      <Route path="/auth/login">
            <Login />
          </Route>
          <Route path='/'>
          <IsAuth>
          <LayoutComp />
          </IsAuth>
          </Route>
          
        </Switch>
      </Router>
  </ConfigProvider>
  
  );
}

export default App;
