import UserLayout from './pages/UserLayout'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemStore from './components/ItemStore'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<UserLayout />}>
        <Route index element = {<ItemStore/>}/>
            <Route path="/mycart" element={<h1>My cart</h1>} />
            <Route path="/myorder" element={<h1>My order</h1>} />
            <Route path="/setting" element={<h1>Setting page</h1>} />
            <Route path="/profile" element={<h1>My profile</h1>} />
            <Route path="/logout" element={<h1>Logout page</h1>} />
            <Route path="*" element={<h1>404 error</h1>} />
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App