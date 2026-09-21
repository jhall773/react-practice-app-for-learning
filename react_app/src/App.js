import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MessagesPage from './pages/MessagesPage';
import UsersPage from './pages/UsersPage';
import { useEffect, useState } from "react";

function App() {
  // useState variables
  const [headerMode, setHeaderMode] = useState(true);

  const [backdropColor, setBackdrop] = useState(true);

  const [users, setUsers] = useState([
    { id: 1, name: "Joseph" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Sam" }
  ]);
  /* Use ".map()" inside the return() to turn each item into JSX
     What’s actually happening under the hood, example:
      ["React", "JavaScript", "CSS"]
        Becomes...
      [
        <li>React</li>,
        <li>JavaScript</li>,
        <li>CSS</li>
      ]
        When using the command...
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
  */
  const [message, setMessage] = useState("User enters a 'message' to display here!");

  const [showMessage, setShowMessage] = useState(true);


  // Event for 'Warm-Up Add' Button in UserList.js Component
  function addWarmUpUser() {
    const warmUpUserLen = users.filter(user => user.name.includes("Warm-Up")).length
    const newUser = {
      id: crypto.randomUUID(),
      name: "Warm-Up User " + (warmUpUserLen + 1)
    };
    setUsers([...users, newUser]);
    /* NOTE: '...' means: "Make a brand new array containing all the old users, plus the new one."
       So, if users = [{ id: 1, name: "Joseph" }]
       Then '...users' becomes
       [{ id: 1, name: "Joseph" }, { id: 2, name: "New User 2" }] 
    */
  }

  // Event for 'Warm-Up Delete All' Button in UserList.js Component
  function deleteAllWarmUp() {
    setUsers(users.filter(user => !user.name.includes("Warm-Up")))
  }

  // Event for 'Delete' Button in User.js component (used in the return to map users as User components)
  function deleteUser(id) {
    setUsers(users.filter(user => user.id !== id));
  }

  // This function is an 'Event', becuase it is a function called after a 'button_click' event.
  function handleClick() {
    console.log("'Click Me' Button clicked at: ", Date.now());
    setCount(count + 1);
  }

  // Event for 'Add User' Submit Form Button in UserLists.js Component
  function handleUserSubmit(e) {
    e.preventDefault(); // stops page reload

    const newUser = {
      id: users.length + 1,
      name: nameInput
    };

    setUsers([...users, newUser]);
    setNameInput(""); // clear input
  }

  // Event for 'Enter Msg' Submit Form Button in MessageBox.js Component, which calls the InputMessage.js Component
  function handleMsgSubmit(e) {
    e.preventDefault(); // stops page reload

    setMessage("Your Entered the Message: " + messageInput) // variable 'message' and 'setMessage' function is defined at the top of function App() with other 'useState' variables
    setMessageInput(""); // clear input
  }

  /* More useState variables */
  const [count, setCount] = useState(0);
  /* count → the current value
     setCount → the function that updates it
     0 → the initial value
  */
  const [nameInput, setNameInput] = useState("");

  const [messageInput, setMessageInput] = useState("");

  /* Functions Used by Header.js to trigger events for the 'Toggle Header Color' 'Toggle Header Message' and 'Toggle Warm-Up Background' Buttons */
  function toggleMessage() {
    setShowMessage(!showMessage);
  }

  function toggleHeaderMode() {
    setHeaderMode(!headerMode);
  }

  function toggleBackdrop() {
    setBackdrop(!backdropColor);
  }

  // This function is used to test the backend API 'simple-api' by checking output in the console.
  function testAPIFetch() {
    fetch('http://localhost:3001/test')
      .then(res => res.json())
      .then(data => console.log("Backend says: " + JSON.stringify(data) + " at " + Date.now()))
      .catch(err => console.error('Error:', err));
  }

  return (
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/messages">Messages</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage headerMode={headerMode} showMessage={showMessage} backdropColor={backdropColor} toggleMessage={toggleMessage} toggleHeaderMode={toggleHeaderMode} 
                                          toggleBackdrop={toggleBackdrop} count={count} handleClick={handleClick}
          />} 
        />
        <Route path="/users" element={<UsersPage headerMode={headerMode} showMessage={showMessage} backdropColor={backdropColor} toggleMessage={toggleMessage} toggleHeaderMode={toggleHeaderMode} 
                                                toggleBackdrop={toggleBackdrop} users={users} nameInput={nameInput} onNameInputChange={setNameInput} onUserSubmit={handleUserSubmit}
                                                onDeleteUser={deleteUser} onWarmUpAdd={addWarmUpUser} onWarmUpDeleteAll={deleteAllWarmUp}
          />} 
        />
        <Route path="/messages" element={<MessagesPage headerMode={headerMode} showMessage={showMessage} backdropColor={backdropColor} toggleMessage={toggleMessage} toggleHeaderMode={toggleHeaderMode} 
                                                      toggleBackdrop={toggleBackdrop} message={message} messageInput={messageInput} onMessageInputChange={setMessageInput} onMessageSubmit={handleMsgSubmit}
                                                      testAPIFetch={testAPIFetch}
          />} 
        />
      </Routes>
    </div>
  );
}

export default App;
