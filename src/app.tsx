import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Home from './pages/home/Home'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </Router>
    </>
  )
}

export default App;
