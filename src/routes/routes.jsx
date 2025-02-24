import { Routes, Route } from 'react-router-dom'

import { Home, Info } from '../pages/'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default Router
