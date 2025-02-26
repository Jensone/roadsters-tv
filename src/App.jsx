import { useState } from 'react'
import Title from './components/Title'
import Counter from './components/Counter'
import Networks from './components/Networks'

import './App.css'

function App() {

  return (
    <main className="">
      <div className="logo"></div>
      <Title></Title>
      <section>
        <Counter></Counter>
      </section>
      <Networks></Networks>
    </main>
  )
}

export default App
