import React, { useState, useEffect } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

import { Projects, Sidebar, Loading } from '../../components/'
import items from '../../data/data'
import * as C from './styles.js'

export function Home() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)

  const handleInfoClick = () => {
    setTimeout(() => {
      history.push('/info')
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <C.Main>
        <button className="info-button" onClick={handleInfoClick}>
          <AiOutlineInfoCircle />
        </button>
        <C.Title>
          <h2>My Projects</h2>
          <div className="underline"></div>
        </C.Title>
        <C.MainSection>
          <Sidebar />
          <Projects items={items} />
        </C.MainSection>
      </C.Main>
    </>
  )
}
