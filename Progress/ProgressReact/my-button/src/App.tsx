import MyButton from './MyButton'

function Cup({guest}: {guest: number}) {
  return <h2>{guest}</h2>
}

function App() {

  return (
    <>
      <h1>React App</h1>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
      <MyButton/>
    </>
  )
}

export default App
