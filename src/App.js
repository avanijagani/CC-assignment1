//import * as React from "react";
import { useState } from "react";
import LoginPage from "./Login/Screen/LoginPage";
import SignUpPage from "./SignUp/Screen/SignUpPage";
import { SubscriptionPage } from "./Subscribe/Screen/SubscriptionPage";
import ProfilePage from "./Profile/Screen/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { removeLocalUser } from "./AWS/route";

function App() {
  //useState set to grab user in localstorage to keep user logged in
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser")
  );

  //centralise login and logout
  const onLogin = (email) => {
    setLoggedInUser(email);
    localStorage.setItem("loggedInUser", email);
  };
  const onLogout = () => {
    removeLocalUser();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage onLogin={onLogin} />} />
        <Route path='/signuppage' element={<SignUpPage />} />
        <Route
          path='/subscriptionpage'
          element={<SubscriptionPage onLogout={onLogout} />}
        />
        <Route
          path='/profilepage'
          element={
            <ProfilePage loggedInUser={loggedInUser} onLogout={onLogout} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
