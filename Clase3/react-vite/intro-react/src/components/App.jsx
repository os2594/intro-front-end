// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {Component} from './Component';
import '../styles/app.css';
import { State } from './State';


function App() {

  return (
    <div>
      <h1 className='titulo'>Hola mundo desde App.jsx</h1>
      <p id='parrafo'>Soy el parrafo en App.jsx</p>
      <Component></Component>
      <State initialState={0} titulo={"titulo1"} />
      <State initialState={5} titulo={"titulo2"} />
      <State initialState={10} titulo={"titulo3"} />
      <State bestState={true} />
    </div>
  )
}

export default App
