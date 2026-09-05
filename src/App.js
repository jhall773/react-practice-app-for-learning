import logo from './logo.svg';
import './App.css';
import Message from './components/Messages';
import User from './components/User';
import Child from './components/Child';
import { useState } from "react";

function App() {
  // useState variables
  const [darkMode, setDarkMode] = useState(true);

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


  // Event for 'Warm-Up Add' Button in return
  function addWarmUpUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Warm-Up User " + (users.length + 1)
    };
    setUsers([...users, newUser]);
    /* NOTE: '...' means: "Make a brand new array containing all the old users, plus the new one."
       So, if users = [{ id: 1, name: "Joseph" }]
       Then '...users' becomes
       [{ id: 1, name: "Joseph" }, { id: 2, name: "New User 2" }] 
    */
  }

  // Event for 'Warm-Up Delete All' Button in return
  function deleteAllWarmUp() {
    setUsers(users.filter(user => !user.name.includes("Warm-Up")))
  }

  // Event for 'Delete' Button in User.js User() component (used in the return to map users as User components)
  function deleteUser(id) {
    setUsers(users.filter(user => user.id !== id));
  }

  // This function is an 'Event', becuase it is a function called after a 'button_click' event.
  function handleClick() {
    console.log("'Click Me' Button clicked at: ", Date.now());
    setCount(count + 1);
  }

  // Event for 'Add User' Submit Form Button in return
  function handleUserSubmit(e) {
    e.preventDefault(); // stops page reload

    const newUser = {
      id: users.length + 1,
      name: nameInput
    };

    setUsers([...users, newUser]);
    setNameInput(""); // clear input
  }

  // Event for 'Add Message' Submit Form Button in return
  function handleMsgSubmit(e) {
    e.preventDefault(); // stops page reload

    setMessage("Your Entered the Message: " + messageInput) // variable 'message' is defined at the top of function App() with other 'useState' variables
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


  return (
    <div className="App"
      style={{
          backgroundColor: backdropColor ? "DodgerBlue" : "LimeGreen",
          minHeight: "120vh"
        }}
    >
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Header Message
      </button>

      <header className={darkMode ? "App-header" : "App-header-light"}>
        {showMessage && <h2>Hello Joseph! React Day 3!</h2>}
      </header>
      
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Header Color
      </button>

      <button onClick={() => setBackdrop(!backdropColor)}>
          Warm-Up Toggle Background
      </button>

      <p>Count: {count}</p>
      
      {/* Form Submits for UserIn Name ('Add User' button) and Message ('Change Msg' button)*/}
      <form onSubmit={handleUserSubmit}>
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      
      <form onSubmit={handleMsgSubmit}>
        <Child messageInput={messageInput} onMessageChange={setMessageInput} />
        <button type="submit">Enter Msg</button>
      </form>

      <button onClick={addWarmUpUser}>Warm-Up Add</button>

      <button onClick={deleteAllWarmUp}>Warm-Up Delete All</button>

      <button onClick={handleClick}>
        Click Me
      </button>
      
      <p>
        <ul>
          {users.map(user => (
            <User 
              key={user.id}
              id={user.id}
              name={user.name}
              onDelete={deleteUser} 
            />
          ))}
        </ul>
      </p>

      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Edit <code>src/App.js</code> and save to reload.
        Hello Joseph — React Day 3!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <h1> 
        My First React App!
      </h1>
      <Message />
      <p>
        {message} {/* variable 'message' is defined at the top of function App() with other 'useState' variables */}
      </p>
    </div>
  );
}

export default App;
