import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/index'
import RoomPage from './pages/room'

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/room/:roomCode' element={<RoomPage />}/>
    </Routes>
   </div>
  )
}

export default App
