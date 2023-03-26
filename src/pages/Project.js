import React from 'react'
import Header from '../components/Header/Header'
import Projectlist from '../components/Projectlist/Projectlist'

function Project() {
  return (
    <div data-testid="projects">
      <Header />
      <Projectlist />
    </div>
  )
}

export default Project