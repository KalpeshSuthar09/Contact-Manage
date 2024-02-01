import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser";
import Header from "./Components/Header";
import UserList from "./Components/UserList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "user";
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(user));
  }, [user]);

  const addUser = (data) => {
    setUser([...user, { id: uuid4(), data }]);
  };

  const removeUser = (id) => {
    const updatedList = user.filter((val) => {
      return val.id !== id;
    });
    setUser(updatedList);
  };
  return (
    <div className="App">
      <Header />
      <AddUser addUser={addUser} />
      <UserList user={user} removeUser={removeUser} />
    </div>
  );
}

export default App;
