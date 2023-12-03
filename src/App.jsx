import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
     <div className='App'>
      <main>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/949592555974812299/E840DB52BC96ADC4832538BF6EC3F31BD8503550/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
         alt="Lotr-background-img" className='bg-img' />
      <Dashboard/>
      </main>
     </div>
    </>
  )
}

export default App
