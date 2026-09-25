import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <BrowserRouter> 
      <Routes>
        <Route path = "/" element ={ <h1>Home Page</h1>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path = "/mycart" element = {<h1>My Cart Page</h1>}/>
          <Route path="/myorders" element={<h1>My orders</h1>} />
          <Route path="/settings" element={<h1>settings</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="*" element={<h1>error</h1>} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
