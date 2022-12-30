import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  const [email, setEmail] = React.useState("");
  const emailInput = React.createRef();

  const focusEmail = () => {
    emailInput.current.focus()
  }

  const updateInput = () => {
    setEmail(emailInput.current.value)
  }

  const updateInputBox = () => {
    emailInput.current.value = "Default";
  }

  return (
    <div className="App">
      <input type={"email"} ref={emailInput} />
      <button onClick={focusEmail} >Focus on Email</button>
      <button onClick={updateInput}>Update to P</button>
      <button onClick={updateInputBox}>Update Default</button>

      <p>{email}</p>

      <Header heading='My Heading' subHeading='My Sub Heading' default={20} />

      <Footer heading='My Footer' subHeading='My Footer Sub Heading' />
    </div>
  );
}

export default App;
