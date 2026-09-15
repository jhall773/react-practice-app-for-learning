import Header from '../components/Header';
import logo from '../logo.svg';

function HomePage({ headerMode, showMessage, backdropColor, toggleMessage, toggleHeaderMode, toggleBackdrop, count, handleClick }) {
  return (
    <div className="App" style={{ backgroundColor: backdropColor ? "DodgerBlue" : "LimeGreen", minHeight: "120vh" }}>
      
      <Header
        headerMode={headerMode}
        showMessage={showMessage}
        backdropColor={backdropColor}
        toggleMessage={toggleMessage}
        toggleHeaderMode={toggleHeaderMode}
        toggleBackdrop={toggleBackdrop}
      />

      <p>Count: {count}</p>
      <p><button onClick={handleClick}>Click Me</button></p>

      <img src={logo} className="App-logo" alt="logo" />
      
      <h2>My First React App!</h2>

      <p>Edit src/App.js and save to reload.</p>
      <p>Hello Joseph — End of React Week 1!</p>

      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default HomePage;
