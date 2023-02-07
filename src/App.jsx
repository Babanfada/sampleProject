import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Bodycontent from "./Components/Bodycontent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdetails from "./Components/Userdetails";
import useLocalStorage from "./Components/uselocalStorage";
export const dataContext = React.createContext("");

function App() {
  const [users, setusers] = useState("");
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setusers(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [count, setCount] = useState(0);
  const [mode, setmode] = useLocalStorage("mode", true);
  // const [mode, setmode] = useState(true);

  const handleToggle = () => {
    setmode((prev) => !prev);
  };

  // React.useEffect(() => {
  //   localStorage.setItem("mode", JSON.stringify(mode));
  //   const lightmode = JSON.parse(localStorage.getItem("mode"));
  //   setmode(lightmode);
  // }, [mode]);

  const searchUser = (e) => {
    if (users.length) {
      const Name = users.filter((user) => {
        return user.profile.firstName.toLowerCase().includes(e.target.value);
      });
      console.log(e.target.value);
      console.log(Name);
      setusers(Name);
    } else {
      console.log("there is no user yet");
    }
  };

  return (
    <div id={mode ? "toggle" : ""} className="App">
      <Router>
        <dataContext.Provider
          value={{
            count,
            mode,
            handleToggle,
            users,
            searchUser,
          }}
        >
          <Header />
          <Searchbar />
          <Routes>
            <Route index element={<Bodycontent />} />
            <Route path="/userdetails/:id" element={<Userdetails />} />
          </Routes>
        </dataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
