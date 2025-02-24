import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Router from './routes/routes'
import GlobalStyles from './styles/global'

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Router />
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
