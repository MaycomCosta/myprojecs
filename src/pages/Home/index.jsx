import React, { useState, useEffect } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { Projects, Sidebar, Loading } from '../../components/'
import items from '../../data/data'
import * as C from './styles.js'

export function Home() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)

  const handleInfoClick = () => {
    setTimeout(() => {
      navigate('/info')
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
