import logo from './logo.svg';
import './App.css';
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"
import {Route, Redirect} from "react-router-dom"
import { ApplicationViews } from './ApplicationViews';

function App() {
  return (
    <>
    <div className="App">
      

      <Route render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        <ApplicationViews />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </div>
    </>
      
     
  );
}

export default App;
