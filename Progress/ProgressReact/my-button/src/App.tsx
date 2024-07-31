import React, { useState } from 'react'
import Button from './Button'
// import MyButton from './MyButton'

// function Cup({guest}: {guest: number}) {
//   return <h2>{guest}</h2>
// }

type Person = {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  // const [resetCount, setResetCount] = useState(0);
  // const [messageCoin, setMessageCoin] = useState('head');
  const [person, setPerson] = useState<Person>({name: '', lastName: '', age: 0});

  // const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    setPerson({...person, [target]: e.target.value});
  }
  
  const onSave = () => {
    console.log(person);
  }

  // const reset = () => {
  //   setCount(0);
  // }

  // const reset= () => {
  //   setCount(0)
  //   setResetCount(resetCount + 1);
  // }
  
  // const flipCoin = () => {
  //   const coin = Math.random() > 0.5;
  //   if(coin) {
  //     setMessageCoin("head");
  //   } else {
  //     setMessageCoin("tail")
  //   }
  // }

  return (
    <>
      {/* <h1>React App</h1> */}
      {/* <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/> */}
      {/* <MyButton/>
      <br/>
      <br/>
      <hr/> */}
      <input 
      type='text'
      onChange={(e) => onChangeText(e, 'name')}
      placeholder='name'
      />
      <br />
      <input 
      type='text'
      onChange={(e) => onChangeText(e, 'lastName')}
      placeholder='lastname'
      />
      <br />
      <input 
      type='number'
      onChange={(e) => onChangeText(e, 'age')}
      placeholder='age'
      />
      <br />
      <button onClick={onSave}>Save</button>
      <Button 
      title={`Click me!`}
      />
      {person.name + " " + person.lastName + " " + person.age}

      {/* <Button 
      title={`Reset ${resetCount}`}
      onPress={reset}/>

      <Button 
      title={`Toss Coin:  " ${messageCoin}" `}
      onPress={flipCoin}/> */}

    </>
  )
}

export default App
