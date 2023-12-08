import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChildComponent } from './components/Child';
import { BorderComponent } from './components/Bordercomponent';

function App() {

  const [email, setEmail] = React.useState("ksmwaram333");

  // 1. Creating a Ref
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

      <button onClick={updateInput}>Update to State</button>

      <button onClick={updateInputBox}>Update Default</button>

      <BorderComponent>
      <p>{email}</p>
      </BorderComponent>

      <ChildComponent ref={emailInput}>
        <h6>I am div</h6>
      </ChildComponent>

      <Header heading='React JS Course' subHeading='By Kamesh' />
    </div>
  );
}

export default App;
