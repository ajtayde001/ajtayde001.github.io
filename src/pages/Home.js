import React from 'react'
import Header from '../components/Header/Header'
import Homepage from '../components/Homepage/Homepage'

function Home() {
  return (
    <div  data-testid="home">
      <Header />
      <Homepage />
    </div>
  )
}

export default Home