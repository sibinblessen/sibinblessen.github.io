import React, { useState } from 'react';
import './App.css';
import PrimaryButton from './components/primary-button/PrimaryButton';

var user = {
  name: 'John Doe',
  age: 25,
  email: ''
};

function App() {

  const [showAge, setShowAge] = useState(false);

  const handleButton1Click = () => {
    setShowAge(prevShowAge => {
      console.log(`The previous status was ${showAge}`);
      const newShowAge = !showAge;
      console.log(`The new status is ${newShowAge}`);
      return newShowAge;
    });
  };

  const handleButton2Click = () => {
    console.log(showAge);
    console.log("Different logic");
    setShowAge(prevShowAge => {
      console.log(`The previous status was ${showAge}`);
      const newShowAge = !showAge;
      console.log(`The new status is ${newShowAge}`);
      return newShowAge;
    });
  };


  return (
    <div className="App">
      <h1>Hello, {user.name}</h1>
      <h1 style={{ visibility: showAge ? 'visible' : 'hidden' }}>{user.age}</h1>
      <PrimaryButton onClick={handleButton1Click} text={"Primary Button 1"} />
      <PrimaryButton onClick={handleButton2Click} text={"Primary Button 2"} />
    </div>
  );
}

export default App;
